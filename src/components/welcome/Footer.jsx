import React from 'react'
import logo from '../../assets/img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 mt-5 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 color-text-lighter text-decoration-none lh-1">
                    <img src={logo} style={{ height: 25 }} alt="" />
                </a>
                <span>© 2023 Company, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3">
                    <a class="color-text-lighter" href="#">
                        <FontAwesomeIcon className='h5 color-text' icon={faTiktok} />
                    </a>
                </li>
                <li class="ms-3">
                    <a class="color-text-lighter" href="#">
                        <FontAwesomeIcon className='h5 color-text' icon={faInstagram} />
                    </a>
                </li>
                <li class="ms-3">
                    <a class="color-text-lighter" href="#">
                        <FontAwesomeIcon className='h5 color-text' icon={faGoogle} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer