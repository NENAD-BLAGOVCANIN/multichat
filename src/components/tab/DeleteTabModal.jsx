import React from 'react';
import { deleteChat } from '../../api/chat';
import { Modal } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function DeleteTabModal({ darkMode, chats, setChats, showDeleteTabModal, setShowDeleteTabModal, selectedDeleteChat, setSelectedDeleteChat }) {

    const { t } = useTranslation();

    const handleCloseModal = () => {
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
            <Modal show={showDeleteTabModal}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={true}
                size='md'
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className='border-0 pt-4'>
                    <span className="bold m-0">{t('delete_chat.text')}</span>
                    <button type="button" onClick={() => { handleCloseModal() }}
                        className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} aria-label="Close">
                    </button>

                </Modal.Header>
                <Modal.Body className='pt-4'>

                    <p className='color-text opacity-80 medium'>
                        {t('delete_chat.subtext')}
                    </p>
                    <div className='modal-footer border-0 pb-2'>
                        <button className='btn btn-danger rounded' onClick={handleDeleteChat}>{t('delete_chat.delete')}</button>
                    </div>
                </Modal.Body>

            </Modal>

        </>
    );
}

export default DeleteTabModal;
