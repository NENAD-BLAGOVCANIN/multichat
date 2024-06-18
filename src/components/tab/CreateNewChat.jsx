import React, { useState } from 'react'
import whatsAppLogo from '../../assets/img/WhatsAppLogo.svg'
import telegramLogo from '../../assets/img/TelegramLogo.svg'
import skypeLogo from '../../assets/img/SkypeLogo.svg'
import messengerLogo from '../../assets/img/MessengerLogo.svg'
import { createChat } from '../../api/chat'
import weChatLogo from '../../assets/img/WeChatLogo.svg'
import lineLogo from '../../assets/img/LineLogo.svg'

function CreateNewChat({ chats, setChats, selectedTab, setSelectedTab }) {

    const [title, setTitle] = useState('');
    const [selectedMessagingService, setSelectedMessagingService] = useState(null);


    const handleCreateNewChat = async () => {
        try {

            const newChat = await createChat(title, selectedMessagingService);
            const updatedChats = [...chats, newChat];
            setChats(updatedChats);
            setSelectedTab(newChat.id);
            setTitle('');
            window.ipcRenderer.send('open-chat', { chat: newChat });

        } catch (error) {
            console.log(error);
        }
    }

    return (

        <>

            <div className='main-content-wrapper p-0'>
                <div className='container'>

                    <div className='row pt-5'>
                        <div className="col-md-6 px-5 pt-5">
                            <h2><b>Create new chat</b></h2>

                            <div style={{ maxWidth: 450, width: '100%' }}>
                                <label className='mt-4 mb-2'>Title <span className='text-danger'>*</span></label>
                                <input type="text"
                                    className='form-control'
                                    placeholder='ex. WhatsApp Business Account'
                                    value={title} style={{ padding: '.8rem' }}
                                    onChange={(event) => setTitle(event.target.value)}
                                />

                                <label className='mt-4 mb-2'>Description (optional)</label>
                                <textarea type="text"
                                    className='form-control'
                                    placeholder='ex. Messages from my clients.'
                                    style={{ padding: '.8rem' }}
                                />

                                <button onClick={() => { handleCreateNewChat() }} className='btn btn-primary rounded w-100 mt-5' style={{ padding: '.8rem' }}>Create</button>

                            </div>

                        </div>
                        <div className="col-md-6 px-5 pt-5">
                            <label className='mt-5 mb-2 ps-1' style={{paddingTop: '1.4rem'}}>Select messaging service <span className='text-danger'>*</span></label>
                            <div className='row m-0'>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('whatsapp') }} className={`btn w-100 d-flex justify-content-center align-items-center small ${selectedMessagingService === 'whatsapp' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={whatsAppLogo} className='img-fluid' style={{ height: 25 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('telegram') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center small ${selectedMessagingService === 'telegram' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={telegramLogo} className='img-fluid' style={{ height: 25 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('skype') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center small ${selectedMessagingService === 'skype' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={skypeLogo} className='img-fluid' style={{ height: 25 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('messenger') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center small ${selectedMessagingService === 'messenger' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={messengerLogo} className='img-fluid' style={{ height: 25 }} alt="" />
                                    </button>
                                </div>
                                <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('wechat') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center small ${selectedMessagingService === 'wechat' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={weChatLogo} className='img-fluid' style={{ height: 25 }} alt="" />
                                    </button>
                                </div>
                                {/* <div className="col-4 pb-3 px-1">
                                    <button onClick={() => { setSelectedMessagingService('line') }} className={`btn w-100 rounded d-flex justify-content-center align-items-center small ${selectedMessagingService === 'line' ? 'btn-primary' : 'btn-basic border'}`} style={{ height: 65 }}>
                                        <img src={lineLogo} className='img-fluid' style={{ height: 25 }} alt="" />
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}

export default CreateNewChat