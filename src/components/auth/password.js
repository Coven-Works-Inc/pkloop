import React, { Component } from 'react'
import { notify } from 'react-notify-toast'

import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'
import Spinner from '../common/spinner'
import axios from 'axios'

class Password extends Component {
  state = {
    password: '',
    confirmpassword: '',
    confirming: false
  }

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmitHandler = e => {
    e.preventDefault()
    const { token } = this.props.match.params
    console.log(token)
    this.setState({ confirming: true })

    const data = {
      password: this.state.password
    }

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/auth/password/${token}`, data)
      .then(res => {
        console.log(res)
        this.setState({ confirming: false })
        notify.show(res.data.message)
        this.setState({ password: '', confirmpassword: ' ' })
      })
      .catch(err => {
        console.log(err)
      })
  }

  //   {this.props.message && (
  //     this.setState({ sendingEmail: false })
  //       notify.show(data.msg)
  //     this.fPassword()
  //   )}
  // this.props.reset(data, this.props.history)
  render () {
    // const { errors } = this.state
    const { confirming } = this.state

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
                <h3>Set New Password</h3>
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
                      type='password'
                      name='password'
                      id='password'
                      placeholder='new password'
                      value={this.state.password}
                      onChange={this.onChangeHandler}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='password'
                      name='confirmpassword'
                      id='confirmpassword'
                      placeholder='confirm new password'
                      value={this.state.confimpassword}
                      onChange={this.onChangeHandler}
                      required
                    />
                  </div>
                  <button className='btn'>
                    {confirming ? (
                      <Spinner size='sm' spinning='spinning' />
                    ) : (
                      'Set Password'
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

export default Password
