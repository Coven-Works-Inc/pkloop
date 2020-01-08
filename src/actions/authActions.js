import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

import { GET_ERRORS, SET_CURRENT_USER, LOADING, SET_TOKEN } from './types'
import { BASE_URL } from '../config/constants'

export const registerUser = (userData, history) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })
  axios
    .post(`${BASE_URL}/auth/signup`, userData)
    .then(res => {
      // console.log(res.data)
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

export const loginUser = (userData, history) => dispatch => {
  // dispatch({
  //   type: LOADING,
  //   payload: true
  // })
  axios
    .post(`${BASE_URL}/auth/login`, userData)
    .then(res => {
      const { token, _id } = res.data.data
      localStorage.setItem('jwtToken', token)
      localStorage.setItem('id', _id)
      setAuthToken(token)
      const decoded = jwt_decode(token)
      dispatch(setCurrentUser(decoded, token))
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

// export const fetchUser = history => (
//     dispatch => {
//         // console.log('fetch')

//         axios
//             .get(`${BASE_URL}/users/fetch`)
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

  dispatch({
    type: GET_ERRORS,
    payload: { message: '' }
  })

  axios
    .post(`${BASE_URL}/auth/verify`, { token })
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

export const reset = (email, history) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })

  dispatch({
    type: GET_ERRORS,
    payload: { message: '' }
  })

  axios
    .post(`${BASE_URL}/users/reset`, { email })
    .then(async res => {
      console.log(res.data)
      dispatch({
        type: GET_ERRORS,
        payload: { message: res.data.message || res.data.error }
      })
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response ? err.response.data : { message: 'Something went wrong' } }))
    .finally(() => dispatch({
      type: LOADING,
      payload: false
    }))
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
//         .post(`${BASE_URL}/users/password`, { password, token })
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
export const setCurrentUser = (decoded, token) => dispatch => {
  // console.log(decoded)
  dispatch({
    type: SET_CURRENT_USER,
    payload: decoded
  })

  dispatch({
    type: SET_TOKEN,
    payload: token
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
    .patch(`${BASE_URL}/users/update`, data)
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
