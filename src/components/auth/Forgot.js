import React, { Component } from 'react'
import { reset } from '../../actions/authActions'
import { notify } from 'react-notify-toast'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'
import Spinner from '../common/spinner'
import axios from 'axios'
import { BASE_URL } from '../../config/constants'

class Login extends Component {
  state = {
    email: '',
    errors: {},
    isSending: false
  }

  //   componentWillReceiveProps () {
  //     this.setState({
  //       errors: this.props.error
  //     })
  //     setTimeout(() => {
  //       this.setState({ errors: '' })
  //     }, 4000)
  //   }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitHandler = e => {
    e.preventDefault()
    this.setState({ isSending: true })

    const data = {
      email: this.state.email
    }

    axios
      .post(`${BASE_URL}/auth/reset`, data)
      .then(res => {
        console.log(res)
        this.setState({ isSending: false })
        notify.show(res.data.message)
        this.setState({ email: '' })
      })
      .catch(err => {
        console.log(err)
      })
  }

  //   {this.props.message && (
  //     this.setState({ sendingEmail: false })
  //       notify.show(data.msg)
  //     this.form.reset()
  //   )}
  // this.props.reset(data, this.props.history)
  render () {
    // const { errors } = this.state
    const { isSending } = this.state

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
                <h3>Forgot Password</h3>
              </div>
              <div>
                <p>Enter the email associated with your account</p>
              </div>
              <div id='contact-form' className='py-3'>
                {/* {errors.message && (
                  <div className='error-msg'>
                    <p>{errors.message}</p>
                  </div>
                )} */}
                <form onSubmit={this.onSubmitHandler}>
                  <div className='form-group'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Email'
                      value={this.state.email}
                      onChange={this.onChangeHandler}
                      required
                    />
                  </div>
                  <button className='btn'>
                    {isSending ? (
                      <Spinner size='sm' spinning='spinning' />
                    ) : (
                      'Remind Me'
                    )}
                  </button>
                </form>
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
  error: state.errors,
  loading: state.loading
})

export default connect(mapStateToProps, { reset })(Login)
