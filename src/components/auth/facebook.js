import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import axios from 'axios'
import { FACEBOOK_APP_SECRET, LOCAL_URL } from '../../config/constants'

const Facebook = ({ informParent = f => f }) => {
  const responseFacebook = response => {
    console.log(response)
    axios({
      method: 'POST',
      url: `${LOCAL_URL}/facebook-login`,
      data: { userID: response.userID, accessToken: response.accessToken }
    })
      .then(response => {
        console.log('FACEBOOK SIGNIN SUCCESS', response)
        // inform parent component
        informParent(response)
      })
      .catch(error => {
        console.log('FACEBOOK SIGNIN ERROR', error.response)
      })
  }
  return (
    <div>
      <FacebookLogin
        appId={FACEBOOK_APP_SECRET}
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

export default Facebook
