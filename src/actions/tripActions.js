import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
// import jwt_decode from 'jwt-decode';

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  LOADING,
  SET_TOKEN,
  POST_TRIP
} from './types'
import { BASE_URL } from '../config/constants'

export const postTrip = (tripData, history) => dispatch => {
  // dispatch({
  //   type: LOADING,
  //   payload: true
  // })

  // dispatch({
  //   type: GET_ERRORS,
  //   payload: { message: '' }
  // })

  console.log(tripData)

  axios
    .post(`${BASE_URL}/trips`, tripData)
    .then(res => {
      dispatch({
        type: POST_TRIP,
        payload: res.data.message
      })
    })
    .catch(err => {
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response
      //     ? err.response.data
      //     : { message: 'Something went wrong, please try again' }
      // })
      console.log(err)
    })
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}
