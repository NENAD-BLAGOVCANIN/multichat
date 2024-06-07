import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faCircleHalfStroke, faEdit, faInfinity, faKeyboard, faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { faFonticonsFi } from '@fortawesome/free-brands-svg-icons'

function Features() {
    return (
        <div className="row">
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faCircleHalfStroke} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        Dark & Light Modes
                    </span>
                    <p className="opacity-80 medium">
                        Choose your preferred color scheme to reduce eye strain.
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faKeyboard} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        Keyboard Shortcuts
                    </span>
                    <p className="opacity-80 medium">
                        Move at the speed of light with our extensive keyboard support.
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faEdit} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        Customizable UI
                    </span>
                    <p className="opacity-80 medium">
                        Customize the UI based on your preferences.
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faShieldHalved} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        Privacy and Security
                    </span>
                    <p className="opacity-80 medium">
                        All of your messages are e2e encrypted, so you can
                        communicate privately with your friends and family.
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faInfinity} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        Unlimited accounts
                    </span>
                    <p className="opacity-80 medium">
                        Open as meny tabs as you like, with each tab having it's own session with unique credentials
                    </p>
                </div>

            </div>
            <div className="col-md-4 p-4">
                <div className='card rounded bg-app py-3 px-4 h-100 border-0'>
                    <FontAwesomeIcon icon={faBell} className='me-auto mb-3 h5' />
                    <span className="mb-2 bold">
                        Notifications
                    </span>
                    <p className="opacity-80 medium">
                        Control your notifications, snooze or mute your messages when busy.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Features