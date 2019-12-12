import React, { Component } from 'react'
import { reset } from '../../actions/authActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo/Logo.png'

class Login extends Component {
    state = {
        username: '',
        errors: {}
    }

    componentWillReceiveProps() {
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

        this.props.reset(this.state.username, this.props.history)
    }

    render() {
        const { errors } = this.state;

        return (
            <div id='container'>
                <div className='left items'>
                    <div className="all-auth-content">
                        <i onClick={() => this.props.history.goBack()} className="material-icons">keyboard_backspace</i>
                        <div className='inner_container'>
                            <div className='logo'>
                                <Link to='/'><img src={Logo} alt='Logo' /></Link>
                            </div>
                            <div><h3>Forgot Password</h3></div>
                            <div><p>Enter your username to get started</p></div>
                            <div id='contact-form' className='py-3'>
                                {errors.message && (
                                    <div className='error-msg'>
                                        <p>{errors.message}</p>
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
                                    <button className='btn'>Submit</button>
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
