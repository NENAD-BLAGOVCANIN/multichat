import React from 'react';
import './TitleBar.css';
import { Square, X } from 'react-bootstrap-icons';
import favicon from '../../assets/img/favicon.ico'

function TitleBar() {
    const minimizeWindow = () => {
        window.ipcRenderer.minimize();
    };

    const maximizeWindow = () => {
        window.ipcRenderer.maximize();
    };

    const closeWindow = () => {
        window.ipcRenderer.close();
    };

    return (
        <div className='title-bar bg-app d-flex justify-content-between align-items-center ps-3'>
            <div className='title-bar-title'>
                <img src={favicon} style={{ height: 18 }} alt="" className='me-2' />
                Multichat - Bringing your conversations together
            </div>
            <div className='title-bar-buttons'>
                <button className='btn color-text hover-lg' onClick={minimizeWindow}>⎯</button>
                <button className='btn color-text hover-lg pb-2' onClick={maximizeWindow}>□</button>
                <button className='btn hover-danger color-text hover-lg' onClick={closeWindow}><X /></button>
            </div>
        </div>
    );
}

export default TitleBar;
