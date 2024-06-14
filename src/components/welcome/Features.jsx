import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleHalfStroke, faEdit, faInfinity, faKeyboard, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

function Features() {

    const { t } = useTranslation();

    return (
        <div className="row" id="features">
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faCircleHalfStroke} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        {t('home.features.box_1.title')}
                    </span>
                    <p className="opacity-80 medium">
                        {t('home.features.box_1.text')}
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faKeyboard} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        {t('home.features.box_2.title')}
                    </span>
                    <p className="opacity-80 medium">
                        {t('home.features.box_2.text')}
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faEdit} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        {t('home.features.box_3.title')}
                    </span>
                    <p className="opacity-80 medium">
                        {t('home.features.box_3.text')}
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faShieldHalved} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        {t('home.features.box_4.title')}
                    </span>
                    <p className="opacity-80 medium">
                        {t('home.features.box_4.text')}
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faInfinity} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        {t('home.features.box_5.title')}
                    </span>
                    <p className="opacity-80 medium">
                        {t('home.features.box_5.text')}
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faBell} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        {t('home.features.box_6.title')}
                    </span>
                    <p className="opacity-80 medium">
                        {t('home.features.box_6.text')}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Features