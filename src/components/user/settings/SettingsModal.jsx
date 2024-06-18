import React, { useState, useEffect, useRef } from 'react'
import ProfilePlaceholderImage from '../../../assets/img/ProfilePlaceholderImage.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoltLightning, faDiamond, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../../api/user';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import DownloadPath from './DownloadPath';
import { Modal } from 'react-bootstrap';

function SettingsModal({ showAccountSettingsModal, setShowAccountSettingsModal, toggleDarkMode, darkMode, spellCheck, setSpellCheck }) {

    const [userInfo, setUserInfo] = useState([]);

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
        setShowAccountSettingsModal(false);
    }

    const toggleSpellCheck = () => {
        setSpellCheck(prevState => !prevState);
    };

    return (
        <>
            <Modal show={showAccountSettingsModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={true}
                size='md'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='border-0'>
                    <Modal.Title className='bold h5'>
                        User settings
                    </Modal.Title>
                    <button type="button" onClick={() => { handleCloseModal() }}
                        className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} aria-label="Close">
                    </button>

                </Modal.Header>

                <Modal.Body className='py-4'>

                    <div>
                        <img src={ProfilePlaceholderImage} className='rounded-circle m-auto d-block px-3' alt="" style={{ height: 85, width: 'auto' }} />
                    </div>

                    <div>
                        <span className="modal-title text-center m-auto d-block my-2 bold">{userInfo.name}</span>
                        <span className='small color-text-lighter text-center m-auto d-block'>{userInfo.email}</span>
                    </div>
                    <div className='py-3'>
                        <span className='medium text-center m-auto d-block py-2'>
                            Current plan: <b>Multichat Free</b>
                        </span>
                        <a className='btn btn-basic bg-transparent m-auto d-block py-3 my-2 medium border px-3 py-2 color-text'>
                            <FontAwesomeIcon icon={faBoltLightning} className='text-warning pe-2' /> Purchase premium
                        </a>
                    </div>



                    <span className='bold'>
                        Appearence
                    </span>

                    <div className="form-group py-4 mb-3">


                        <BootstrapSwitchButton
                            checked={darkMode}
                            className="bg-gray"
                            onlabel='🌘'
                            offlabel='☀️'
                            onChange={toggleDarkMode}
                        />

                        <label className='small ps-2'> Light/dark mode</label>

                    </div>

                    <span className='bold'>
                        Language
                    </span>

                    <div className="form-group py-4 mb-3">


                        <BootstrapSwitchButton
                            checked={spellCheck}
                            className="bg-gray"
                            onChange={toggleSpellCheck}
                        />

                        <label className='small ps-2'> Enable spell check</label>

                    </div>

                    <span className='bold'>
                        Account
                    </span>

                    <div className="form-group py-4 mb-3">


                        <Link to='/logout' className='btn btn-basic bg-transparent small border px-3 py-2 color-text'>
                            <FontAwesomeIcon icon={faRightFromBracket} className='text-danger pe-2' /> Logout
                        </Link>

                    </div>

                    {/* <span className='bold mt-4'>
                        Downloads
                    </span> */}

                    {/* <DownloadPath /> */}



                </Modal.Body>

            </Modal>

        </>
    );
}

export default SettingsModal