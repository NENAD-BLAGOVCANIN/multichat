import React from 'react'
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as ChatIcon } from '../../assets/img/svg/chat.svg'

function Welcome() {

    const { t } = useTranslation();

    return (
        <div className='main-content-wrapper p-0'>
            <div className='d-flex align-items-center justify-content-center' style={{ height: 'calc(100vh - 50px)' }}>
                <div className='d-flex flex-column align-items-center'>
                    <p className='mb-2'><ChatIcon /></p>
                    <p className='mb-2'>Start by creating a new tab</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome