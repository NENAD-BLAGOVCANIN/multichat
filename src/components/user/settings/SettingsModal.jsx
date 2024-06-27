import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faShare, faThunderstorm, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBoltLightning, faDiamond, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../../api/user';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import DownloadPath from './DownloadPath';
import { Modal } from 'react-bootstrap';
import LanguageSelector from './LanguageSelector';
import { ReactComponent as UserIcon } from '../../../assets/img/svg/user.svg'

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

                    <div className='text-center'>
                        <UserIcon />
                    </div>

                    <div>
                        <span className="modal-title text-center m-auto d-block mt-2 bold">{userInfo.name}</span>
                        <span className='small color-text-lighter text-center m-auto d-block'>{userInfo.email}</span>
                    </div>
                    <div className='py-3'>
                        <a href="https://multi-chat.io/pricing" className='btn btn-basic bg-info m-auto fw-500 d-block py-3 my-2 medium border px-3 py-2 text-color'>
                            <FontAwesomeIcon icon={faBoltLightning} className='text-warning pe-2' /> Upgrade to premium
                        </a>
                        <span className='small text-center m-auto d-block pb-2'>
                            Current plan: Multichat Free
                        </span>
                    </div>


                    <div className="form-group py-2 d-flex justify-content-between align-items-center">

                        <label>Light/dark mode</label>

                        <BootstrapSwitchButton
                            checked={darkMode}
                            className="bg-gray"
                            onlabel='🌘'
                            offlabel='☀️'
                            onChange={toggleDarkMode}
                        />

                    </div>

                    <div className="form-group py-2 d-flex justify-content-between align-items-center">

                        <label>Enable spell check</label>

                        <BootstrapSwitchButton
                            checked={spellCheck}
                            className="bg-gray"
                            onChange={toggleSpellCheck}
                        />



                    </div>

                    <div className="form-group py-2 d-flex justify-content-between align-items-center">

                        <label> Select language</label>

                        <LanguageSelector />

                    </div>

                    <p className='bold mt-5'>
                        Account
                    </p>

                    <div className="form-group mb-3">

                        <a href='https://multi-chat.io/account/' className='text-decoration-none medium py-2 color-text'>
                            <FontAwesomeIcon icon={faCircleUp} className='pe-2' /> Check for updates
                        </a>

                    </div>

                    <div className="form-group mb-3">

                        <a href='https://multi-chat.io/account/' className='text-decoration-none medium py-2 color-text'>
                            <FontAwesomeIcon icon={faShare} className='pe-2' /> View subscription details
                        </a>

                    </div>

                    <div className="form-group mb-3">

                        <Link to='/logout' className='text-decoration-none medium py-2 color-text'>
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