import React from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'
import { connect } from 'react-redux'
// import { GOOGLE_ID, BASE_URL, LOCAL_URL } from '../../config/constants'
import { googleLogin } from '../../actions/authActions'

const Google = ({ googleLogin }) => {
  const responseGoogle = response => {
    const data = {
      idToken: response.tokenId
    }
    googleLogin(data)
  }
  return (
    <GoogleLogin
      clientId={`${process.env.REACT_APP_GOOGLE_ID}`}
      render={renderProps => (
        <button
          style={{
            width: '100%',
            borderRadius: '4px',
            height: '2rem',
            background: 'red',
            padding: '0.5rem 0rem 1.5rem 0rem',
            color: '#fff',
            cursor: 'pointer',
            outline: 0
          }}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <i className='fab fa-google pr-2'></i>
          Log in with Google
        </button>
      )}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps, { googleLogin })(Google)
