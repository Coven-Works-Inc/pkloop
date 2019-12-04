import React, {Component} from 'react'

import './auth.css'

class Register extends Component {

  state = {
    username: "",
    password: ""
  }


  render(){
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
              <div className='form-group'>
                <input
                  type='text'
                  name='username'
                  id='username'
                  placeholder='Username'
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
              <p style={{ color: '#00bdbe' }}>Forgot password?</p>
              <button className='btn'>Log in now</button>
            </form>
            <p style={{ textAlign: 'center' }}>OR</p>
            <button className='btn_google'>
              <i className='icon'>
                <img
                  src='https://img.icons8.com/color/30/000000/google-logo.png'
                  alt=''
                />
              </i>
              <span className='text'> Log in with Google </span>
            </button>
            <button
              className='btn_google'
              style={{ background: '#3b5998', color: 'white' }}
            >
              <i className='icon' style={{ marginLeft: '0.7rem' }}>
                <img
                  src='https://img.icons8.com/color/27/000000/facebook-f.png'
                  alt=''
                />
              </i>
              <span className='text'> Log in with Facebook</span>
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
}

export default signup
