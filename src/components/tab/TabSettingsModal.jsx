import React, { useState } from 'react'

function TabSettingsModal({ selectedSettingsChat, setSelectedSettingsChat, showTabSettingsModal, setShowTabSettingsModal }) {

    const [title, setTitle] = useState('');

    const handleCloseModal = () => {
        window.ipcRenderer.send('show-chat', {});
        setShowTabSettingsModal(false);
    }

    return (
        <>
            <div className={`modal fade ${showTabSettingsModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ zIndex: '9999999999' }}>
                <div className="modal-dialog modal-dialog-centered mt-5" role="document" style={{ maxWidth: 550 }}>
                    <div className="modal-content bg-app px-3 border-0 shadow-lg">
                        <div className="modal-header pb-0 border-0 d-flex align-items-center">
                            <div>
                                <span className="modal-title bold m-0 h5">Chat settings</span>
                            </div>
                            <span type="button" className="close ms-auto m-0 color-text-lighter" onClick={handleCloseModal} style={{ fontSize: '20pt', fontWeight: '100' }}>
                                <span aria-hidden="true">&times;</span>
                            </span>
                        </div>
                        <div className='modal-body'>

                            <label className='mt-4 mb-2 medium'>Title <span className='text-danger'>*</span></label>
                            <input type="text"
                                className='form-control medium'
                                placeholder='ex. WhatsApp Business Account'
                                value={title} style={{ padding: '.8rem' }}
                                onChange={(event) => setTitle(event.target.value)}
                            />

                            <div class="form-check pt-4">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked />
                                <label class="form-check-label" for="defaultCheck1">
                                    Enable Audio notifications
                                </label>
                            </div>

                            <div class="form-check pt-2">
                                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked />
                                <label class="form-check-label" for="defaultCheck1">
                                    Enable Message Notifications
                                </label>
                            </div>

                            <div className='pt-5 pb-4 mt-3 d-flex justify-content-end'>
                                <button className='btn btn-primary medium'>Save changes</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TabSettingsModal