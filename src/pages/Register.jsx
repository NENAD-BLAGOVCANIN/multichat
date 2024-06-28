import React, { useState } from 'react';
import { register } from '../api/register';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

export default function Register() {

  const { t } = useTranslation();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(name, email, password);
      const response = await login(email, password);
      if (response.success) {
        toast.success('Successfully registered an account!');
        navigate('/home');
      }
    } catch (error) {
      setError('An error occurred while logging in.');
      console.error(error);
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
            <h2 className='bold'>{t('register.sign_up')}</h2>
            <p>{t('register.welcome')}</p>
          </div>

        </div>


        {error && <span className='text-danger small'>{error}</span>} { }

        <form onSubmit={handleSubmit} className='mb-5'>
          <div className='py-2'>
            <label className='mb-1 ps-1'>{t('register.name')}</label>
            <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder={t('register.enter_your_name')} />
          </div>
          <div className='py-2'>
            <label className='mb-1 ps-1'>{t('register.email')}</label>
            <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder={t('register.enter_your_email')} />
          </div>
          <div className='py-2'>
            <label className='mb-1 ps-1'>{t('register.password')}</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder='••••••••' />
          </div>
          <div className='py-2 mb-3 mt-2'>
            <Button variant="primary" type="submit" loading={loading} >
              {t('register.sign_up')}
            </Button>
          </div>

          <div className='d-flex justify-content-between py-2'>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label color-text-lighter small" htmlFor="flexCheckDefault">
                {t('register.remember_me')}
              </label>
            </div>
            <div className='d-flex justify-content-center'>
              <span className='text-secondary small fw-500 text-decoration-none pe-2'>{t('register.already_have_an_account')}</span>
              <Link to="/login" className='small fw-500 color-text text-decoration-none'>{t('register.login')}</Link>
            </div>
          </div>

        </form>
      </div>

    </div>
  )
}