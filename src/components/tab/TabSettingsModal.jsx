import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap';
import { updateChat } from '../../api/chat';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

function TabSettingsModal({ chats, setChats, darkMode, selectedSettingsChat, setSelectedSettingsChat, showTabSettingsModal, setShowTabSettingsModal }) {

    const { t } = useTranslation();

    const [title, setTitle] = useState('');
    const [isAudioEnabled, setIsAudioEnabled] = useState(false);
    const [isMessageEnabled, setIsMessageEnabled] = useState(false);

    const handleCloseModal = () => {
        setShowTabSettingsModal(false);
    }

    useEffect(() => {
        setTitle(selectedSettingsChat?.title || '');
        setIsAudioEnabled(selectedSettingsChat?.audio_notifications || false);
        setIsMessageEnabled(selectedSettingsChat?.notifications || false);
    }, [selectedSettingsChat]);


    const handleSaveChanges = async () => {
        try {
            const updatedChat = await updateChat(selectedSettingsChat.id, title, isAudioEnabled, isMessageEnabled);
            const updatedChats = chats.map(chat => {
                if (chat.id === updatedChat.id) {
                    return updatedChat;
                }
                return chat;
            });
            setChats(updatedChats);
            setSelectedSettingsChat(updatedChat);
            toast.success('Successfully updated tab settings!');

        } catch (error) {
            toast.error('Error while trying to update tab settings. Try again later!');

        }
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
                        {t('chat_settings.title')}
                    </Modal.Title>
                    <button type="button" onClick={() => { handleCloseModal() }}
                        className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} aria-label="Close">
                    </button>

                </Modal.Header>

                <Modal.Body className='pt-4'>

                    <label className='mt-4 mb-2 medium'>{t('chat_settings.title_label')} <span className='text-danger'>*</span></label>
                    <input type="text"
                        className='form-control medium'
                        placeholder='ex. WhatsApp Business Account'
                        value={title} style={{ padding: '.8rem' }}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <div className="form-check pt-4">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked={isAudioEnabled} onChange={(event) => setIsAudioEnabled(event.target.checked)} />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            {t('chat_settings.enable_audio_notifications')}
                        </label>
                    </div>

                    <div className="form-check pt-2">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" checked={isMessageEnabled} onChange={(event) => setIsMessageEnabled(event.target.checked)} />
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            {t('chat_settings.enable_message_notifications')}
                        </label>
                    </div>

                    <div className='pt-5 pb-2 mt-3 d-flex justify-content-end'>
                        <button className='btn btn-primary medium' onClick={() => { handleSaveChanges() }}>
                            {t('chat_settings.save_changes')}
                        </button>
                    </div>

                </Modal.Body>

            </Modal>
        </>
    )
}

export default TabSettingsModal