import React, { useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faEllipsisV, faGear, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';

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
                <Dropdown.Item className="hover medium text-danger" onClick={(event) => { openDeleteTabModal(event, tabId) }}>
                    <FontAwesomeIcon icon={faTrash} className='pe-2' />
                    Close Window
                </Dropdown.Item>
            </Dropdown.Menu>
        );
    }

    return (
        <Dropdown.Menu show className="options-menu-dropdown shadow-lg">
            <Dropdown.Item className="hover medium" onClick={(event) => { openTabSettingsModal(event, chat) }}>
                <FontAwesomeIcon icon={faGear} className='pe-2 small' />
                Chat settings
            </Dropdown.Item>
            <Dropdown.Item className="hover medium text-danger" onClick={(event) => { openDeleteTabModal(event, chat) }}>
                <FontAwesomeIcon icon={faTrash} className='pe-2' />
                Delete chat
            </Dropdown.Item>
        </Dropdown.Menu>
    );
}

export default OptionsDropdown;
