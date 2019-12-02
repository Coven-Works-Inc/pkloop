import React from 'react'

import './auth.css'

const signup = () => {
  return (
    <div id='container'>
      <div className='left items'>
        <div className='inner_container'>
          <div>
            <h3>Create new account</h3>
          </div>
          <div>
            <p>
              PKLoop connects senders with travelers to facilitate <br /> parcel
              delivery within 12-48 hours at the cheapest rates
            </p>
          </div>
          <div id='contact-form' className='py-2'>
            <form>
              <div className='form-group'>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='First Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='email'
                  name='lastname'
                  id='lastname'
                  placeholder='Last Name'
                />
              </div>
              <div className='form-group'>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Username'
                />
              </div>
              <div class='form-group'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email Address'
                />
              </div>
              <div class='form-group'>
                <input
                  type='phone'
                  name='phone'
                  id='phone'
                  placeholder='Phone Number'
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
              <button class='btn'>SIGN UP NOW</button>
            </form>
            <p>OR</p>
            <button class='btn_google'>
              <i class='icon'>
                <img
                  src='https://img.icons8.com/color/30/000000/google-logo.png'
                  alt=''
                />
              </i>
              <span class='text'> Sign up with Google</span>
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
              <span class='text'> Sign up with Facebook</span>
            </button>
          </div>
          <div className='terms'>
            <p>
              By signing up, you are indicating that you've read and
              <br /> agree to the <span>Terms of Use</span> and{' '}
              <span>Privacy Policy</span>.
            </p>
            <p>
              Already have an account ? <span>Log in</span>
            </p>
          </div>
        </div>
      </div>
      <div className='regright items' />
    </div>
  )
}

export default signup
