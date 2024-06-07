import React from 'react'
import whatsAppLogo from '../../assets/img/WhatsAppLogo.svg'
import telegramLogo from '../../assets/img/TelegramLogo.svg'
import skypeLogo from '../../assets/img/SkypeLogo.svg'
import messengerLogo from '../../assets/img/MessengerLogo.svg'

function PlatformsView() {
    return (
        <>
            <div className='py-5'>
                <p className='opacity-80 text-center h5 fw-400'>
                    Multichat lets you send and receive messages from many major messaging platforms:
                </p>
            </div>

            <div className='d-flex justify-content-center align-items-center'>
                <div className='p-4'>
                    <img src={whatsAppLogo} className='img-fluid' style={{ height: 80 }} alt="" />
                </div>
                <div className='p-4'>
                    <img src={telegramLogo} className='img-fluid' style={{ height: 80 }} alt="" />
                </div>
                <div className='p-4'>
                    <img src={messengerLogo} className='img-fluid' style={{ height: 80 }} alt="" />
                </div>
                <div className='p-4'>
                    <img src={skypeLogo} className='img-fluid' style={{ height: 80 }} alt="" />
                </div>
            </div>
        </>
    )
}

export default PlatformsView