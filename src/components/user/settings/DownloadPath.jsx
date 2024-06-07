import React, { useState, useEffect, useRef } from 'react'

function DownloadPath() {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleChange = (event) => {
        const selectedDirectory = event.target.files[0].webkitRelativePath;
        console.log('Selected directory:', selectedDirectory);
    };

    return (
        <div className='form-group'>
            <label className='mt-4 mb-2 small'>Default download path:</label>
            <div className='card w-100 p-2 small bg-app d-flex justify-content-between flex-row'>
                <span>Downloads/</span>
                <span className='text-primary' onClick={handleClick} style={{ cursor: 'pointer' }}>Change</span>
            </div>
            <input
                type='file'
                ref={fileInputRef}
                style={{ display: 'none' }}
                webkitdirectory='true'
                mozdirectory='true'
                directory='true'
                onChange={handleChange}
            />
        </div>
    )
}

export default DownloadPath