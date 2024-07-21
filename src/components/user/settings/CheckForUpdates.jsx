import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

function CheckForUpdates() {

    const { t } = useTranslation();
    const [updateAvailable, setUpdateAvailable] = useState(false);

    const checkForUpdates = async () => {
        try {
            await window.ipcRenderer.send('check-for-updates');
        } catch (error) {
            console.error('Error checking for updates:', error);
        }
    };

    useEffect(() => {
        const handleUpdateAvailable = (event, data) => {
            setUpdateAvailable(true);
        };

        if (window.ipcRenderer) {
            window.ipcRenderer.on('update-available', handleUpdateAvailable);
        }

    }, []);


    return (
        <div>
            <div className="form-group mb-3">
                <a onClick={checkForUpdates} disabled={updateAvailable} className='pointer text-decoration-none medium py-2 color-text'>
                    <FontAwesomeIcon icon={faCircleUp} className='pe-2' />
                    {updateAvailable ? 'No updates found!' : 'Check for updates'}
                </a>
            </div>
        </div>
    )
}

export default CheckForUpdates