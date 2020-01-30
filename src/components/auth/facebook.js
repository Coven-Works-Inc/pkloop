import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { connect } from 'react-redux'
import { facebookLogin } from '../../actions/authActions'
// import { FACEBOOK_APP_ID, LOCAL_URL } from '../../config/constants'

const Facebook = ({ facebookLogin }) => {
  const responseFacebook = response => {
    const data = {
      idToken: { userID: response.userID, accessToken: response.accessToken }
    }
    facebookLogin(data)
  }
  return (
    <div>
      <FacebookLogin
        appId={process.env.FACEBOOK_APP_ID}
        autoLoad={false}
        callback={responseFacebook}
        render={renderProps => (
          <button
            style={{
              width: '100%',
              borderRadius: '4px',
              height: '2rem',
              background: 'blue',
              padding: '0.5rem 0rem 1.8rem 0rem',
              color: '#fff',
              cursor: 'pointer',
              outline: 0
            }}
            onClick={renderProps.onClick}
            className='btn btn-primary btn-lg btn-block'
          >
            <i className='fab fa-facebook' style={{ marginLeft: '1rem' }}></i>{' '}
            Login with Facebook
          </button>
        )}
      />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    prop: state.prop
  }
}

export default connect(mapStateToProps, { facebookLogin })(Facebook)
