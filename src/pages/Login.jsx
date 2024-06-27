import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import logo from '../assets/img/logo.png'
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

export default function Login() {

    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        const response = await login(email, password);
        if (response.success) {
            toast.success('Successfully logged in!');
            navigate('/home');
        } else {
            setError(response.message);
        }
        setLoading(false);
    };


    return (
        <div className='main-auth-page-container'>

            <div className='w-100 px-5 m-auto d-block' style={{ maxWidth: 600 }}>

                <div className='d-flex align-items-center mb-3 mt-5'>
                    <div className='py-3'>
                        <img src={logo} alt="" className='auth-page-logo' />
                    </div>

                    <div className='ps-4'>
                        <h2 className='bold'>{t('login.login')}</h2>
                        <p>{t('login.welcome')}</p>
                    </div>

                </div>

                {error && <span className='text-danger small'>{error}</span>} { }

                <form onSubmit={handleSubmit} className='w-100 mb-5'>
                    <div className='py-2'>
                        <label className='mb-1 ps-1'>{t('login.email')}</label>
                        <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder={t('login.enter_your_email')} />
                    </div>
                    <div className='py-2'>
                        <label className='mb-1 ps-1'>{t('login.password')}</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder='••••••••' />
                    </div>

                    <div className='d-flex justify-content-between py-3'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {t('login.remember_pass')}
                            </label>
                        </div>
                        <a href="/forgot-password" className='text-primary fw-500 text-decoration-none'>{t('login.forgot_password')}</a>
                    </div>


                    <div className='py-2 mt-3'>
                        <Button variant="primary" type="submit" loading={loading} >
                            {t('login.login')}
                        </Button>
                    </div>

                    <div className='d-flex justify-content-center pt-3'>
                        <span className='text-secondary small fw-500 text-decoration-none pe-2'>{t('login.dont_have_an_account')}</span>
                        <Link to="/register" className='small fw-500 color-text text-decoration-none'>{t('login.sign_up')}</Link>
                    </div>


                </form>
            </div>

        </div>
    )
}