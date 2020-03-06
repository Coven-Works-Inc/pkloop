import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import history from '../history'

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  LOADING,
  SET_TOKEN,
  UPDATE_PROFILE_PICTURE,
  GET_STRIPE_ID
} from './types'

export const googleLogin = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/auth/google-login`, data)
    .then(async res => {
      // Save to localStorage
      const { token, _id } = res.data.data
      localStorage.setItem('jwtToken', token)
      localStorage.setItem('id', _id)
      // Set token to Auth header
      setAuthToken(token)
      // Decode token to get user data
      const decoded = jwt_decode(token)
      // Set current user
      await dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      })
      history.push('/')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: 'Google login Error'
      })
    )
}

export const facebookLogin = (data, history, props) => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/auth/facebook-login`, data)
    .then(res => {
      console.log(res)
      const { token, _id } = res.data.data
      localStorage.setItem('jwtToken', token)
      localStorage.setItem('id', _id)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded, token))
      const location = props.location
      history.push('/dashboard/transactions')
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
          ? err.response.data.message
          : 'Something went wrong'
      })
    })
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}

export const registerUser = (userData, history, props) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/auth/signup`, userData)
    .then(res => {
      // console.log(res.data)
      const location = props.location
      if (
        location.redirect === '/parcel' ||
        location.redirect === '/trips' ||
        location.redirect === '/shippers'
      ) {
        localStorage.setItem('redirect', props.location.redirect)
      }
      history.push('/verify')
    })
    .catch(err => {
      console.log(err.response)
      dispatch({
        type: GET_ERRORS,
        payload: err.response
          ? err.response.data.message
          : { message: 'Something went wrong. Please try again' }
      })
    })
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}

export const loginUser = (userData, history, props) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, userData)
    .then(res => {
      const { token, _id } = res.data.data
      localStorage.setItem('jwtToken', token)
      localStorage.setItem('id', _id)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded, token))

      const location = props.location
      // if (location.redirect === '/parcel' || localStorage.getItem('redirect') === '/parcel') {
      //   localStorage.removeItem('redirect')
      //   history.push('/parcel')
      // }  else if (location.redirect === '/trips' || localStorage.getItem('redirect') === '/trips') {
      //   localStorage.removeItem('redirect')
      //   history.push('/trips')
      // } else if (location.redirect === '/shippers' || localStorage.getItem('redirect') === '/shippers') {
      //   localStorage.removeItem('redirect')
      //   history.push('/shippers')
      // }
      if (location.redirect === '/') {
        history.push('/parcel')
      } else {
        history.push(`${location.redirect}`)
      }
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
          ? err.response.data.message
          : 'Something went wrong'
      })
    })
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}

// export const fetchUser = history => (
//     dispatch => {
//         // console.log('fetch')

//         axios
//             .get(`${process.env.BASE_URL}/users/fetch`)
//             .then(async res => {
//                 // const { token } = localStorage
//                 await dispatch(setCurrentUser(res.data.data, res.data.data.token))
//                 localStorage.setItem('token', res.data.data.token)
//             })
//             .catch(err => {

//                 // history.push('/login')
//                 // // window.location.href = '/login'
//                 // dispatch({ type: GET_ERRORS, payload: err.response ? err.response.data : { message: 'Something went wrong' } })
//                 logoutUser()
//             })
//     }
// )

export const verify = (token, history) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })

  // dispatch({
  //   type: GET_ERRORS,
  //   payload: { message: '' }
  // })

  axios
    .post(`${process.env.REACT_APP_BASE_URL}/auth/verify`, { token })
    .then(async res => {
      // console.log(res)
      // setTimeout(() => {
      //   history.push('/login')
      // }, 2000)
      history.push('/login')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
          ? err.response.data
          : { message: 'Something went wrong' }
      })
    )
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}

export const reset = (data, history) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })

  dispatch({
    type: GET_ERRORS,
    payload: { message: '' }
  })

  axios
    .post(`${process.env.REACT_APP_BASE_URL}/users/reset`, data)
    .then(async res => {
      console.log(res.data)

      history.push('/verify')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
          ? err.response.data
          : { message: 'Something went wrong' }
      })
    )
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}

// export const completeReset = (password, token, history) => dispatch => {
//     console.log(token)
//     dispatch({
//         type: LOADING,
//         payload: true
//     })

//     dispatch({
//         type: GET_ERRORS,
//         payload: { message: '' }
//     })

//     axios
//         .post(`${process.env.BASE_URL}/users/password`, { password, token })
//         .then(async res => {
//             console.log(res.data)
//             if (!res.data.status) dispatch({
//                 type: GET_ERRORS,
//                 payload: { message: res.data.error }
//             })
//             else history.push('/login')
//         })
//         .catch(err => dispatch({ type: GET_ERRORS, payload: err.response ? err.response.data : { message: 'Something went wrong' } }))
//         .finally(() => dispatch({
//             type: LOADING,
//             payload: false
//         }))
// }

// Set logged in user
export const setCurrentUser = decoded => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  })
}

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken')

  // Remove auth header for future requests
  setAuthToken(false)

  // Set current user to {} which will set isAuthenticated to false
  //dispatch(setCurrentUser({}))

  window.location.href = '/'
}

export const changePassword = data => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })

  dispatch({
    type: GET_ERRORS,
    payload: {}
  })

  axios
    .patch(`${process.env.REACT_APP_BASE_URL}/users/update`, data)
    .then(res => {
      const { data } = res
      console.log(data)
      alert('Password Changed Successfully')
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response
          ? err.response.data
          : { message: 'Something went wrong' }
      })
    )
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}
export const updateProfilePicture = file => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/users/updatePicture`, file)
    .then(res => {
      dispatch({
        type: UPDATE_PROFILE_PICTURE,
        payload: res
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response ? err.response.data : 'Unable to upload picture'
      })
    })
}
export const connectStripe = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/payments/connect`, data)
    .then(res => {
      console.log(res)
    })
}
export const getStripeId = () => dispatch => {
  axios.get(`${process.env.REACT_APP_BASE_URL}/payments/stripe`).then(res => {
    dispatch({
      type: GET_STRIPE_ID,
      payload: res.data.stripeId
    })
  })
}
