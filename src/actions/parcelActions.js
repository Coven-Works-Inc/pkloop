import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
// import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, LOADING, SET_TOKEN } from './types'
import { BASE_URL } from '../config/constants'

export const postParcel = (parcelData, history) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })

  dispatch({
    type: GET_ERRORS,
    payload: { message: '' }
  })

  //   console.log(parcelData)

  axios
    .post(`${BASE_URL}/parcel`, parcelData)
    .then(res => {
      //   TODO: Make a dispatch with the success page here

      console.log('Done')
    })
    .catch(err => {
      console.log(err)
      //   dispatch({
      //     type: GET_ERRORS,
      //     payload: err.response
      //       ? err.response.data
      //       : { message: 'Something went wrong, please try again' }
      //   })
    })
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}
