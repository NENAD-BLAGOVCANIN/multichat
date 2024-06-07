import React from 'react'
import logo from '../../assets/img/logo.png'
import Features from './Features'
import Footer from './Footer'
import PlatformsView from './PlatformsView'
import multichatExample from '../../assets/img/multichatExample.webp'
import messagingExample from '../../assets/img/messagingScreensExample.png'

function Welcome() {
    return (
        <div className='blur-background-wrapper'>
            <div className='main-content-wrapper'>

                <h1 className='text-center bold pt-5'>
                    <img src={logo} className='img-fluid' style={{ height: 65 }} alt="" />
                    <span className='ps-3'>Welcome to Multichat</span>
                </h1>
                <p className='text-center opacity-80'>Access all of your messages from one platform.</p>

                <div className="container">

                    <img src={multichatExample} style={{ maxWidth: 660 }} className='m-auto w-100 d-block' alt="" />

                    <div className='py-5 text-center mt-5'>
                        <h1 className='bold mb-3'>Bringing Your Conversations Together
                        </h1>
                        <p className='opacity-80 text-center m-auto d-block' style={{ maxWidth: 1000 }}>
                            Welcome to MultiChat, your all-in-one messaging solution designed to streamline your digital communication experience. With MultiChat, you can conveniently manage multiple messaging services in one centralized location. Say goodbye to switching between apps and hello to effortless multitasking.
                        </p>

                        <img src={messagingExample} style={{ maxWidth: 800 }} className='w-100' alt="" />

                    </div>

                    <div className='py-5'>
                        <PlatformsView />
                    </div>


                    <div className="py-5 mt-5">
                        <h1 className='text-center bold'>Features</h1>
                    </div>

                    <Features />
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Welcome