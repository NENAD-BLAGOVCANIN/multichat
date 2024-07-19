import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp, faShare, faRightFromBracket, faBoltLightning } from '@fortawesome/free-solid-svg-icons';
import { Modal, Nav, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../../api/user';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from 'react-i18next';
import About from '../../About';
import Privacy from '../../Privacy';
import CheckForUpdates from './CheckForUpdates';
const electron = window.electron;

function SettingsModal({ showSettingsModal, setShowSettingsModal, toggleDarkMode, darkMode, spellCheck, setSpellCheck }) {

    const { t } = useTranslation();
    const [userInfo, setUserInfo] = useState([]);

    const handleLinkClick = (url) => {
        electron.shell.openExternal(url);
    };

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await getUserInfo();
                setUserInfo(response);
            } catch (error) {
                console.log(error);
            }
        };

        fetchUserInfo();
    }, []);

    const handleCloseModal = () => {
        setShowSettingsModal(false);
    };

    const toggleSpellCheck = () => {
        setSpellCheck(prevState => !prevState);
    };

    return (
        <Modal show={showSettingsModal}
            onHide={handleCloseModal}
            backdrop="static"
            keyboard={true}
            size='lg'
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='border-0 position-absolute' style={{ right: 0, top: '1rem', zIndex: 99999 }}>
                <button type="button" onClick={handleCloseModal}
                    className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} aria-label="Close">
                </button>
            </Modal.Header>

            <Modal.Body className='pb-4 pt-4'>
                <Tab.Container id="settings-tabs" defaultActiveKey="account-settings">
                    <div className="row">
                        <div className="col-md-4">
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="account-settings">{t('user_settings.accountPreferences')}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="privacy">{t('user_settings.privacyAndProtection')}</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="about">{t('user_settings.about')}</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                        <div className="col-md-8">
                            <Tab.Content>
                                <Tab.Pane eventKey="account-settings">
                                    <h3 className='bold h5'>
                                        {userInfo?.name} <br />
                                        <span className='small fw-400 color-text-lighter'>{userInfo?.email}</span>
                                    </h3>
                                    <div className='py-3'>
                                        <a onClick={() => { handleLinkClick("https://multi-chat.io/pricing") }} className='btn btn-basic bg-info m-auto fw-500 d-block py-3 my-2 medium border px-3 py-2 text-color'>
                                            <FontAwesomeIcon icon={faBoltLightning} className='text-warning pe-2' /> {t('user_settings.upgrade_to_premium')}
                                        </a>
                                        <span className='small text-center m-auto d-block pb-2'>
                                            {t('user_settings.current_plan')} {userInfo?.subscription?.title}
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

                                    <CheckForUpdates />                            

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
                                </Tab.Pane>

                                <Tab.Pane eventKey="privacy">
                                    <Privacy />
                                </Tab.Pane>

                                <Tab.Pane eventKey="about">
                                    <About />
                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                    </div>
                </Tab.Container>
            </Modal.Body>
        </Modal>
    );
}

export default SettingsModal;
