import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEllipsisV, faGear, faHome, faPlus } from '@fortawesome/free-solid-svg-icons';

function OptionsDropdown({ tabId, chat=null, closeOptionsDropdown, openDeleteTabModal, openTabSettingsModal }) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-menu')) {
                closeOptionsDropdown();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [closeOptionsDropdown]);

    if (!chat) {
        return (
            <Dropdown.Menu show className="options-menu-dropdown shadow-lg">
                <Dropdown.Item className="hover" onClick={(event) => { openDeleteTabModal(event, tabId) }}>
                    <FontAwesomeIcon icon={faClose} className='pe-2' />
                    Close Window
                </Dropdown.Item>
            </Dropdown.Menu>
        );
    }

    return (
        <Dropdown.Menu show className="options-menu-dropdown shadow-lg">
            <Dropdown.Item className="hover" onClick={(event) => { openTabSettingsModal(event, chat) }}>
                <FontAwesomeIcon icon={faGear} className='pe-2 small' />
                Settings
            </Dropdown.Item>
            <Dropdown.Item className="hover" onClick={(event) => { openDeleteTabModal(event, chat) }}>
                <FontAwesomeIcon icon={faClose} className='pe-2' />
                Delete Chat
            </Dropdown.Item>
        </Dropdown.Menu>
    );
}

export default OptionsDropdown;
