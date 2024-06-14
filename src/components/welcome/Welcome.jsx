import React from 'react'
import logo from '../../assets/img/logo.png'
import Features from './Features'
import Footer from './Footer'
import PlatformsView from './PlatformsView'
import multichatExample from '../../assets/img/multichatExample.webp'
import messagingExample from '../../assets/img/messagingScreensExample.png'
import { useTranslation } from 'react-i18next';

function Welcome() {

    const { t } = useTranslation();

    return (
        <div className='blur-background-wrapper'>
            <div className='main-content-wrapper'>

                <h1 className='text-center bold pt-5'>
                    <img src={logo} className='img-fluid' style={{ height: 65 }} alt="" />
                    <span className='ps-3'>{t('home.hero_section.title')}</span>
                </h1>
                <p className='text-center opacity-80'>{t('home.hero_section.subtitle')}</p>

                <div className="container">

                    <img src={multichatExample} style={{ maxWidth: 660 }} className='m-auto w-100 d-block' alt="" />

                    <div className='py-5 text-center mt-5'>
                        <h1 className='bold mb-3'>{t('home.section_2.title')}
                        </h1>
                        <p className='opacity-80 text-center m-auto d-block' style={{ maxWidth: 1000 }}>
                            {t('home.section_2.subtitle')}
                        </p>

                        <img src={messagingExample} style={{ maxWidth: 800 }} className='w-100' alt="" />

                    </div>

                    <div className='py-5'>
                        <PlatformsView />
                    </div>


                    <div className="py-5 mt-5">
                        <h1 className='text-center bold'>{t('home.features.title')}</h1>
                    </div>

                    <Features />
                    <Footer />

                </div>
            </div>
        </div>
    )
}

export default Welcome