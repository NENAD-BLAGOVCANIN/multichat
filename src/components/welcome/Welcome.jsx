import React from 'react'
import logo from '../../assets/img/logo.png'
import Features from './Features'
import Footer from './Footer'
import PlatformsView from './PlatformsView'
import multichatExample from '../../assets/img/multichatExample.webp'
import messagingExample from '../../assets/img/messagingScreensExample.png'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Welcome() {

    const { t } = useTranslation();

    return (
        <div className='main-content-wrapper p-0'>
            <div className='d-flex align-items-center justify-content-center' style={{ height: 'calc(100vh - 50px)' }}>
                <div className='d-flex flex-column align-items-center'>
                    <p className='mb-2'>Start by creating a new tab</p>
                    <p className='mb-2'><FontAwesomeIcon icon={faPlus} /></p>
                </div>
            </div>
        </div>
    )
}

export default Welcome