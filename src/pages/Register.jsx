import React, { useState } from 'react';
import { register } from '../api/register';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.png'
import mobileImgExample from '../assets/img/mobile-img-example.png'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

export default function Register() {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
  };


  return (
    <div className='main-auth-page-container'>

      <div className="card p-0 w-100 bg-transparent overflow-hidden" style={{ maxWidth: 'unset', minHeight: '100vh' }}>

        <div className="row m-0">
          <div className="col-md-6 d-flex align-items-center" style={{ minHeight: '100vh' }}>
            <div className='w-100 px-4 m-auto d-block py-4' style={{ maxWidth: 600 }}>


              <div className='d-flex align-items-center mb-3'>
                <div className='py-3'>
                  <img src={logo} alt="" className='auth-page-logo' />
                </div>

                <div className='ps-4'>
                  <h2 className='bold'>Sign Up</h2>
                  <p>Welcome! Please enter your details.</p>
                </div>

              </div>


              {error && <span className='text-danger small'>{error}</span>} { }

              <form onSubmit={handleSubmit}>
                <div className='py-2'>
                  <label className='mb-1 ps-1'>Name</label>
                  <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder='Enter your name' />
                </div>
                <div className='py-2'>
                  <label className='mb-1 ps-1'>Email</label>
                  <input type="text" name='email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder='Enter your email' />
                </div>
                <div className='py-2'>
                  <label className='mb-1 ps-1'>Password</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name='password' className='form-control py-3' style={{ backgroundColor: '#EBE9F9' }} placeholder='••••••••' />
                </div>
                <div className='py-2 mb-3 mt-2'>
                  <button type="submit" className='btn btn-primary w-100 py-3 fw-500' style={{ backgroundColor: '#EBE9F9' }}>Sign Up</button>
                </div>

                <div className='d-flex justify-content-between py-2'>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label className="form-check-label color-text-lighter small" htmlFor="flexCheckDefault">
                      Remember Me
                    </label>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <span className='text-secondary small fw-500 text-decoration-none pe-2'>Already have an account?</span>
                    <Link to="/login" className='small fw-500 color-text text-decoration-none'>Log In</Link>
                  </div>
                </div>

              </form>
            </div>

          </div>
          <div className="col-md-6 px-0">
            <div style={{ minHeight: '100vh' }}>
              <img src={mobileImgExample} className='w-100' style={{ objectFit: 'cover', maxWidth: 800, minHeight: '100vh' }} alt="" />
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}
