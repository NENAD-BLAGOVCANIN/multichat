import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownDivider } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfo, faInfoCircle, faQuestionCircle, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { ReactComponent as TrashIcon } from '../assets/img/svg/trash.svg';
import { ReactComponent as SettingsIcon } from '../assets/img/svg/settings.svg';

function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeOptionsDropdown = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <div className='btn pe-4 ps-3 color-text d-flex align-items-center h-100' onClick={toggleDropdown}>
                <FontAwesomeIcon icon={faBars} className='pointer' />
            </div>
            <Dropdown.Menu show={isOpen} className='dropdown-menu'>
                <Dropdown.Item className="hover d-flex align-items-center">
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
        </div>
    );
}

export default DropdownMenu;
