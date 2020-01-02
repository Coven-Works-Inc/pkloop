import React, { Component } from 'react'
import { loginUser } from '../../actions/authActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errors: {},
    buttonText: 'Login Now',
    display: 'none',
  }

  componentWillReceiveProps () {
    this.setState({
      errors: this.props.error
    })
    setTimeout(() => {
      this.setState({ errors: '' })
    }, 4000)
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

    this.setState({
      display:'inline-block',
      buttonText: 'PLEASE WAIT',
    })
    console.log(this.props)
    this.props.loginUser(userData, this.props.history)
    
  }

  render () {
    const { errors } = this.state

    return (
      <div id='container'>
        <div className='left items'>
          <div className='all-auth-content'>
            <i
              onClick={() => this.props.history.goBack()}
              className='material-icons'
            >
              keyboard_backspace
            </i>
            <div className='inner_container'>
              <div className='logo'>
                <Link to='/'>
                  <img src={Logo} alt='Logo' />
                </Link>
              </div>
              <div>
                <h3>Welcome back</h3>
              </div>
              <div>
                <p>Log in to continue access</p>
              </div>
              <div id='contact-form' className='py-3'>
                {this.props.error && (
                  <div className='error-msg'>
                    <p>{this.props.error}</p>
                  </div>
                )}
                <form onSubmit={this.onSubmitHandler}>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Username'
                      value={this.state.username}
                      onChange={this.onChangeHandler}
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
                      // errors={errors.password}
                    />
                  </div>
                  <p style={{ color: '#00bdbe' }}>Forgot password?</p>
                  <button className='btn' type="submit"> {this.props.loading ? <span style={{display:'inline-block'}} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>: <div>Login now</div>}</button>
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
                  <span className='sec_text'>
                    {' '}
                    <Link
                      to='/register'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(0, 189, 190)'
                      }}
                    >
                      Sign up now
                    </Link>
                  </span>
                </p>
              </div>
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
  error: state.auth.error,
  loading: state.auth.loading
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
