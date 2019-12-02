import React from 'react'

import './auth.css'

const signup = () => {
  return (
    <div id='container'>
      <div className='left items'>
        <div className='inner_container'>
          <div>
            <h3>Welcome back</h3>
          </div>
          <div>
            <p>Log in to continue access</p>
          </div>
          <div id='contact-form' className='py-2'>
            <form>
              <div class='form-group'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email Address'
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='Password'
                />
              </div>
              <p style={{ color: '#00bdbe' }}>Forgot it?</p>
              <button className='btn'>Log in now</button>
            </form>
            <p style={{ textAlign: 'center' }}>OR</p>
            <button class='btn_google'>
              <i class='icon'>
                <img
                  src='https://img.icons8.com/color/30/000000/google-logo.png'
                  alt=''
                />
              </i>
              <span className='text'> Log in with Google </span>
            </button>
            <button
              class='btn_google'
              style={{ background: '#3b5998', color: 'white' }}
            >
              <i class='icon' style={{ marginLeft: '0.7rem' }}>
                <img
                  src='https://img.icons8.com/color/27/000000/facebook-f.png'
                  alt=''
                />
              </i>
              <span class='text'> Log in with Facebook</span>
            </button>
          </div>
          <div className='terms'>
            <p>
              Don't have a PKLoop account?
              <span className='sec_text'> Sign up now</span>
            </p>
          </div>
        </div>
      </div>
      <div className='loginright items' />
    </div>
  )
}

export default signup
