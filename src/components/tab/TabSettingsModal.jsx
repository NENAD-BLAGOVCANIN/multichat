import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

function TabSettingsModal({ darkMode, setSelectedSettingsChat, showTabSettingsModal, setShowTabSettingsModal }) {

    const [title, setTitle] = useState('');

    const handleCloseModal = () => {
        window.ipcRenderer.send('show-chat', {});
        setShowTabSettingsModal(false);
    }

    return (
        <>

            <Modal show={showTabSettingsModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={true}
                size='md'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header className='border-0'>
                    <Modal.Title className='bold h5'>
                        Chat settings
                    </Modal.Title>
                    <button type="button" onClick={() => { handleCloseModal() }}
                        className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} aria-label="Close">
                    </button>

                </Modal.Header>

                <Modal.Body className='pt-4'>

                    <label className='mt-4 mb-2 medium'>Title <span className='text-danger'>*</span></label>
                    <input type="text"
                        className='form-control medium'
                        placeholder='ex. WhatsApp Business Account'
                        value={title} style={{ padding: '.8rem' }}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <div className="form-check pt-4">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Enable Audio notifications
                        </label>
                    </div>

                    <div className="form-check pt-2">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Enable Message Notifications
                        </label>
                    </div>

                    <div className='pt-5 pb-2 mt-3 d-flex justify-content-end'>
                        <button className='btn btn-primary medium'>Save changes</button>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default TabSettingsModal