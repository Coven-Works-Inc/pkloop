import React, { Component } from 'react'
import { loginUser } from '../../actions/authActions'
import { connect } from 'react-redux'

import './auth.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: {}
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitHandler = e => {
    e.preventDefault()

    const userData = {
      username: this.state.username,
      password: this.state.password
    }

    this.props.loginUser(userData, this.props.history)
  }

  render () {
    const { errors } = this.state
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
              {errors.message && <div className="error-msg">
                <p>{errors.message}</p>
              </div>}
              <form onSubmit={this.onSubmitHandler}>
                <div className='form-group'>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    placeholder='Username'
                    value={this.state.username}
                    onChange={this.onChangeHandler}
                    errors={errors.username}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={this.state.password}
                    onChange={this.onChangeHandler}
                    errors={errors.password}
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

const mapStateToProps = state => ({
  auth: state.auth,
  error: state.errors,
  loading: state.loading
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
