import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownDivider } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfo, faInfoCircle, faQuestionCircle, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import SettingsModal from './user/settings/SettingsModal';

function DropdownMenu({toggleDarkMode, darkMode, spellCheck, setSpellCheck}) {

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

    return (
        <div className='pe-3 ps-2'>
            <div className='btn color-text d-flex align-items-center h-100' onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faBars} className='pointer' />
            </div>
            <Dropdown.Menu show={isOpen} className='dropdown-menu'>
                <Dropdown.Item className="hover d-flex align-items-center" onClick={openAccountSettingsModal}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className='ps-2 medium'>
                        Account Settings
                    </span>
                </Dropdown.Item>
                <Dropdown.Item className="hover d-flex align-items-center">
                    <FontAwesomeIcon icon={faInfoCircle} />
                    <span className='ps-2 medium'>
                        About
                    </span>
                </Dropdown.Item>
                <Dropdown.Item className="hover d-flex align-items-center">
                    <FontAwesomeIcon icon={faQuestionCircle} />
                    <span className='ps-2 medium'>
                        Help
                    </span>
                </Dropdown.Item>
                <DropdownDivider />
                <Dropdown.Item className="hover text-danger d-flex align-items-center">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    <span className='ps-2 medium'>
                        Quit
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
