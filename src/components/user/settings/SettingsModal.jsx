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
import { useTranslation } from 'react-i18next';

function SettingsModal({ showAccountSettingsModal, setShowAccountSettingsModal, toggleDarkMode, darkMode, spellCheck, setSpellCheck }) {

    const { t } = useTranslation();

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
                        {userInfo.name}
                        <span className='small fw-400 color-text-lighter text-center m-auto d-block'>{userInfo.email}</span>
                    </Modal.Title>
                    <button type="button" onClick={() => { handleCloseModal() }}
                        className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} aria-label="Close">
                    </button>

                </Modal.Header>

                <Modal.Body className='pb-4 pt-0'>

                    <div className='py-3'>
                        <a href="https://multi-chat.io/pricing" className='btn btn-basic bg-info m-auto fw-500 d-block py-3 my-2 medium border px-3 py-2 text-color'>
                            <FontAwesomeIcon icon={faBoltLightning} className='text-warning pe-2' /> {t('user_settings.upgrade_to_premium')}
                        </a>
                        <span className='small text-center m-auto d-block pb-2'>
                            {t('user_settings.current_plan')}
                        </span>
                    </div>


                    <div className="form-group py-2 d-flex justify-content-between align-items-center">

                        <label>{t('user_settings.light_dark_mode')}</label>

                        <BootstrapSwitchButton
                            checked={darkMode}
                            className="bg-gray"
                            onlabel='🌘'
                            offlabel='☀️'
                            onChange={toggleDarkMode}
                        />

                    </div>

                    <div className="form-group py-2 d-flex justify-content-between align-items-center">

                        <label>{t('user_settings.enable_spell_check')}</label>

                        <BootstrapSwitchButton
                            checked={spellCheck}
                            className="bg-gray"
                            onChange={toggleSpellCheck}
                        />



                    </div>

                    <div className="form-group py-2 d-flex justify-content-between align-items-center">

                        <label>{t('user_settings.select_language')}</label>

                        <LanguageSelector />

                    </div>

                    <p className='bold mt-5'>
                        {t('user_settings.account')}
                    </p>

                    <div className="form-group mb-3">

                        <a href='https://multi-chat.io/account/' className='text-decoration-none medium py-2 color-text'>
                            <FontAwesomeIcon icon={faCircleUp} className='pe-2' />
                            {t('user_settings.check_for_updates')}
                        </a>

                    </div>

                    <div className="form-group mb-3">

                        <a href='https://multi-chat.io/account/' className='text-decoration-none medium py-2 color-text'>
                            <FontAwesomeIcon icon={faShare} className='pe-2' />
                            {t('user_settings.view_subscription_details')}
                        </a>

                    </div>

                    <div className="form-group mb-3">

                        <Link to='/logout' className='text-decoration-none medium py-2 color-text'>
                            <FontAwesomeIcon icon={faRightFromBracket} className='text-danger pe-2' />
                            {t('user_settings.logout')}
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