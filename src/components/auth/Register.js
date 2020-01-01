import React, { Component } from 'react'

import './auth.css'
import { registerUser } from '../../actions/authActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'
// import loader from '../../assets/loader.gif'

class Register extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    errors: {},
    loading: false,
    display: 'none',
    buttonText: 'SIGN UP NOW',
  }

  // componentDidUpdate() {
  //   console.log(this.props);
  // }

  componentWillReceiveProps() {
    // console.log(this.props);
    this.setState({
      errors: this.props.errors
      // loading: this.props.loading
    })
    setTimeout(() => {
      this.setState({ errors: '' })
    }, 4000)
  }

  handleChange = e => {
    const { user } = this.state
    this.setState({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({
      display: 'inline-block',
      buttonText: 'PLEASE WAIT'
    })
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      confirmpassword: this.state.confirmPassword
    }

    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    const { errors } = this.state
    // console.log(errors);

    return (
      <div id='container'>
        <div className='left items'>
          <div className="all-auth-content">
            <i onClick={() => this.props.history.goBack()} className="material-icons">keyboard_backspace</i>
            <div className='inner_container'>
              <div className='logo'>
                <Link to='/'>
                  <img src={Logo} alt='Logo' />
                </Link>
              </div>
              <div>
                <h3>Create new account</h3>
              </div>
              <div>
                <p>
                  PKLoop connects senders with travelers to facilitate parcel
                  delivery within 12-48 hours at the cheapest rates
              </p>
              </div>
              <div id='contact-form' className='py-2'>
                {errors.message && (
                  <div className='error-msg'>
                    <p>{errors.message}</p>
                  </div>
                )}
                <form onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='firstname'
                      id='firstname'
                      placeholder='First Name'
                      value={this.state.firstname}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='lastname'
                      id='lastname'
                      placeholder='Last Name'
                      value={this.state.lastname}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Username'
                      value={this.state.username}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Email Address'
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='phone'
                      name='phone'
                      id='phone'
                      placeholder='Phone Number'
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Password'
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      name='confirmPassword'
                      id='confirmPassword'
                      placeholder='Confirm Password'
                      value={this.state.confirmPassword}
                      onChange={this.handleChange}
                    />
                  </div>
                  {/* !loading &&  */}
                  <button className='btn'>{this.state.buttonText} <span style={{display:this.state.display}} className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span></button>
                  {/* {loading && <img
                  src={loader}
                  alt=''
                />} */}
                </form>
                <p>OR</p>
                <button className='btn_google'>
                  <i className='icon'>
                    <img
                      src='https://img.icons8.com/color/30/000000/google-logo.png'
                      alt=''
                    />
                  </i>
                  <span className='text'> Sign up with Google</span>
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
                  <span className='text'> Sign up with Facebook</span>
                </button>
              </div>
              <div className='terms'>
                <p>
                  By signing up, you are indicating that you've read and
                <br /> agree to the <span>Terms of Use</span> and{' '}
                  <span>Privacy Policy</span>.
              </p>
                <p>
                  Already have an account?{' '}
                  <span className='sec_text'>
                    {' '}
                    <Link
                      to='/login'
                      style={{
                        textDecoration: 'none',
                        color: 'rgba(0, 189, 190)'
                      }}
                    >
                      Log in
                  </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className='regright items' />
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    errors: state.errors,
    loading: state.loading
  }
}

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))
