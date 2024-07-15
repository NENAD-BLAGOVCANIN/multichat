import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownDivider } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfo, faInfoCircle, faQuestionCircle, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import SettingsModal from './user/settings/SettingsModal';
import { PersonCircle, InfoCircle, QuestionCircle } from 'react-bootstrap-icons';
const electron = window.electron;

function DropdownMenu({ toggleDarkMode, darkMode, spellCheck, setSpellCheck }) {

    const [isOpen, setIsOpen] = useState(false);
    const [showSettingsModal, setShowSettingsModal] = useState(false);

    const { t } = useTranslation();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeOptionsDropdown = () => {
        setIsOpen(false);
    };

    const openAccountSettingsModal = (event) => {
        event.stopPropagation();
        setShowSettingsModal(true);
    }

    const handleLinkClick = (url) => {
        electron.shell.openExternal(url);
    };

    return (
        <div className='pe-3 ps-2'>
            <div className='btn color-text d-flex align-items-center h-100' onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faBars} className='pointer' />
            </div>
            <Dropdown.Menu show={isOpen} className='dropdown-menu'>
                <Dropdown.Item className="hover d-flex align-items-center" onClick={openAccountSettingsModal}>
                    <PersonCircle className='m-0' />
                    <span className='ps-3 medium'>
                        {t('account_dropdown.accountSettings')}
                    </span>
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLinkClick('https://multi-chat.io/about')} className="hover d-flex align-items-center">
                    <InfoCircle className='m-0' />
                    <span className='ps-3 medium'>
                        {t('account_dropdown.about')}
                    </span>
                </Dropdown.Item>
                <Dropdown.Item className="hover d-flex align-items-center">
                    <QuestionCircle className='m-0' />
                    <span className='ps-3 medium'>
                        {t('account_dropdown.help')}
                    </span>
                </Dropdown.Item>

            </Dropdown.Menu>

            <SettingsModal
                showSettingsModal={showSettingsModal}
                setShowSettingsModal={setShowSettingsModal}
                toggleDarkMode={toggleDarkMode} darkMode={darkMode}
                spellCheck={spellCheck} setSpellCheck={setSpellCheck}
            />

        </div>
    );
}

export default DropdownMenu;
