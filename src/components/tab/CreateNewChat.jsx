import React, { useState } from 'react'
import whatsAppLogo from '../../assets/img/WhatsAppLogo.svg'
import telegramLogo from '../../assets/img/TelegramLogo.svg'
import skypeLogo from '../../assets/img/SkypeLogo.svg'
import messengerLogo from '../../assets/img/MessengerLogo.svg'
import discordLogo from '../../assets/img/DiscordLogo.svg'
import { createChat } from '../../api/chat'
import weChatLogo from '../../assets/img/WeChatLogo.svg'
import { useTranslation } from 'react-i18next';
import Button from '../../components/Button';


function CreateNewChat({ chats, setChats, selectedTab, setSelectedTab }) {

    const { t } = useTranslation();

    const [title, setTitle] = useState('');
    const [selectedMessagingService, setSelectedMessagingService] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCreateNewChat = async () => {
        setLoading(true);
        if (!selectedMessagingService) {
            setError("No messaging service selected!");
            setLoading(false);
            return false;
        }
        try {

            const newChat = await createChat(title, selectedMessagingService);
            const updatedChats = [...chats, newChat];
            setChats(updatedChats);
            setSelectedTab(newChat.id);
            setTitle('');
            setError('');

        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    return (

        <>

            <div className='main-content-wrapper p-0'>
                <div className='container'>

                    <div className='row pt-5'>
                        <div className="col-md-6 px-5 pt-5">
                            <h2><b>{t('create_new_chat.title')}</b></h2>

                            <div style={{ maxWidth: 450, width: '100%' }} className="pt-4">

                                {error && <p className='text-danger small'>{error}</p>} { }

                                <label className='mb-2'>{t('create_new_chat.title_label')} <span className='text-danger'>*</span></label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='ex. WhatsApp Business Account'
                                    value={title} style={{ padding: '.8rem' }}
                                    onChange={(event) => setTitle(event.target.value)}
                                />

                                <label className='mt-4 mb-2'>{t('create_new_chat.description_label')}</label>
                                <textarea type="text"
                                    className='form-control'
                                    placeholder='ex. Messages from my clients.'
                                    style={{ padding: '.8rem' }}
                                />

                                <div className='pt-4'>
                                    <Button onClick={() => { handleCreateNewChat() }} variant="primary" loading={loading} >
                                        {t('create_new_chat.create')}
                                    </Button>
                                </div>

                            </div>

                        </div>
                        <div className="col-md-6 px-5 pt-5">
                            <label className='mt-5 mb-2 ps-1' style={{ paddingTop: '1.4rem' }}>{t('create_new_chat.messaging_service_label')} <span className='text-danger'>*</span></label>
                            <div className='row m-0'>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('whatsapp') }} className={`btn w-100 d-flex justify-content-center align-items-center small ${selectedMessagingService === 'whatsapp' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={whatsAppLogo} className='img-fluid' style={{ height: 30 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('telegram') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center hover small ${selectedMessagingService === 'telegram' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={telegramLogo} className='img-fluid' style={{ height: 30 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('skype') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center hover small ${selectedMessagingService === 'skype' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={skypeLogo} className='img-fluid' style={{ height: 30 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('messenger') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center hover small ${selectedMessagingService === 'messenger' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={messengerLogo} className='img-fluid' style={{ height: 30 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('discord') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center hover small ${selectedMessagingService === 'discord' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={discordLogo} className='img-fluid' style={{ height: 25 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('wechat') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center hover small ${selectedMessagingService === 'wechat' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={weChatLogo} className='img-fluid' style={{ height: 30 }} alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default CreateNewChat