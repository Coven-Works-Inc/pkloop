import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
// import jwt_decode from 'jwt-decode';

import {
  GET_ERRORS,
  SET_CURRENT_USER,
  LOADING,
  SET_TOKEN,
  SET_TRAVELER,
  POST_TRIP
} from './types'

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
    .post(`${process.env.BASE_URL}/trips`, tripData)
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
export const getTrip = id => dispatch => {
  axios.get(`${process.env.BASE_URL}/trips/trip/${id}`).then(res => {
    dispatch({
      type: SET_TRAVELER,
      payload: res.data
    })
  })
}
export const addReceiver = details => dispatch => {
  axios
    .post(`${process.env.BASE_URL}/trips/trip/receiver`, details)
    .then(res => {
      console.log(res)
    })
}
export const completeTrip = data => dispatch => {
  axios.post(`${process.env.BASE_URL}/trips/complete`, data).then(res => {
    console.log(res)
  })
}
