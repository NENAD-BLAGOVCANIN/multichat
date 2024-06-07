import React, { useState, useEffect, useRef } from 'react'
import ProfilePlaceholderImage from '../../../assets/img/ProfilePlaceholderImage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../../api/user';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import DownloadPath from './DownloadPath';

function SettingsModal({ showAccountSettingsModal, setShowAccountSettingsModal, toggleDarkMode, darkMode }) {

    const [userInfo, setUserInfo] = useState([]);

    const [spellCheck, setSpellCheck] = useState(() => {
        const storedValue = localStorage.getItem('spellCheck');
        return storedValue !== null ? JSON.parse(storedValue) : true;
    });

    useEffect(() => {
        localStorage.setItem('spellCheck', JSON.stringify(spellCheck));
    }, [spellCheck]);

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await getUserInfo();
                setUserInfo(response);
                console.log(response);
            } catch (error) {
                console.log(error)
            }
        };

        fetchUserInfo();
    }, []);


    const handleCloseModal = () => {
        window.ipcRenderer.send('show-chat', {});
        setShowAccountSettingsModal(false);
    }

    const toggleSpellCheck = () => {
        setSpellCheck(prevState => !prevState);
    };

    return (
        <>
            <div className={`modal fade ${showAccountSettingsModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ zIndex: '9999999999' }}>
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: 550 }}>
                    <div className="modal-content bg-app px-3 border-0 shadow-lg">
                        <div className="modal-header pb-0 border-0 d-flex align-items-center">
                            <span type="button" className="close ms-auto m-0 color-text-lighter" onClick={handleCloseModal} style={{ fontSize: '25pt', fontWeight: '100' }}>
                                <span aria-hidden="true">&times;</span>
                            </span>
                        </div>
                        <div className='modal-body pt-0'>

                            <div>
                                <img src={ProfilePlaceholderImage} className='rounded-circle m-auto d-block px-3' alt="" style={{ height: 85, width: 'auto' }} />
                            </div>

                            <div>
                                <span className="modal-title text-center m-auto d-block my-2 bold">{userInfo.name}</span>
                                <span className='small color-text-lighter text-center m-auto d-block'>{userInfo.email}</span>
                            </div>
                            <div className='text-center py-3'>
                                <Link to='/logout' className='btn btn-basic bg-transparent small border px-3 py-2 color-text'>
                                    <FontAwesomeIcon icon={faRightFromBracket} className='text-danger pe-2' /> Logout
                                </Link>
                            </div>


                            <span className='bold mt-3'>
                                Appearence
                            </span>

                            <div className="form-group py-4">


                                <BootstrapSwitchButton
                                    checked={darkMode}
                                    className="bg-gray"
                                    onlabel='☀️'
                                    offlabel='🌘'
                                    onChange={toggleDarkMode}
                                />

                                <label className='small ps-2'> Light/dark mode</label>

                            </div>

                            <span className='bold mt-3'>
                                Language
                            </span>

                            <div className="form-group py-4">


                                <BootstrapSwitchButton
                                    checked={spellCheck}
                                    className="bg-gray"
                                    onChange={toggleSpellCheck}
                                />

                                <label className='small ps-2'> Enable spell check</label>

                            </div>

                            <span className='bold mt-4'>
                                Downloads
                            </span>

                            <DownloadPath />


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SettingsModal