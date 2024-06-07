import React from 'react';
import { deleteChat } from '../../api/chat';

function DeleteTabModal({ chats, setChats, showDeleteTabModal, setShowDeleteTabModal, selectedDeleteChat, setSelectedDeleteChat }) {

    const handleCloseModal = () => {
        window.ipcRenderer.send('show-chat', {});
        setShowDeleteTabModal(false);
    }

    const handleDeleteChat = async () => {
        try {
            const reponse = deleteChat(selectedDeleteChat.id);
            const updatedChats = chats.filter(chat => chat.id !== selectedDeleteChat.id);
            setChats(updatedChats);
            setShowDeleteTabModal(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={`modal fade ${showDeleteTabModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog" style={{ zIndex: '9999999999' }}>
                <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: 550 }}>
                    <div className="modal-content bg-app px-3 border-0 shadow-lg">
                        <div className="modal-header pb-0 border-0 d-flex align-items-center">
                            <div>
                                <span className="modal-title bold m-0">Are you sure you want to delete this chat?</span>
                            </div>
                            <span type="button" className="close ms-auto m-0 color-text-lighter" onClick={handleCloseModal} style={{ fontSize: '25pt', fontWeight: '100' }}>
                                <span aria-hidden="true">&times;</span>
                            </span>
                        </div>
                        <div className='modal-body'>
                            <p className='color-text opacity-80 medium'>
                                After you delete this chat, all of your data including your credentials, history and settings will be permanently gone.
                            </p>

                        </div>
                        <div className='modal-footer border-0 pb-4'>
                            <button className='btn btn-danger rounded' onClick={handleDeleteChat}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteTabModal;
