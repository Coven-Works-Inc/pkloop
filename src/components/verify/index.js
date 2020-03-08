import React, { Component } from 'react'
import HeaderFooter from '../headerFooter'
import { verify } from '../../actions/authActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Verify extends Component {
  state = {
    token: this.props.location.search.split('=')[1],
    verified: false,
    errors: {}
  }

  componentDidMount() {
    if (this.state.token) {
      this.props.verify(this.state.token, this.props.history)
    }

    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  resendLink() {

  }

  render() {
    const { errors } = this.state
    console.log(errors)

    return (
      <HeaderFooter redirect={this.props.location}>
        {!this.state.token && (
          <div className='empty-page'>
            <p>
              A link has been sent to your mail. Follow the instructions to
              complete this process.
            </p>
            <button className='btnQ' onClick={this.resendLink}>Resend Link</button>
          </div>
        )}
        {this.state.verified && (
          <div className='empty-page'>
            <p>Account verified successfully. You will be redirected shortly</p>
          </div>
        )}
      </HeaderFooter>
    )
  }
}

Verify.propTypes = {
  verify: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth,
    error: state.errors,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { verify })(withRouter(Verify))
