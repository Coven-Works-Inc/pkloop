import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
// import jwt_decode from 'jwt-decode';

import { FETCH_TRAVELERS, GET_ERRORS, FETCH_SHIPPERS, GET_TRAVELERS, CONNECT_TRAVELER } from './types'

import { BASE_URL } from '../config/constants'

export const fetchTravelers = () => async dispatch => {
  axios
    .get(`${BASE_URL}/trips`)
    .then(res => {
      dispatch({
        type: FETCH_TRAVELERS,
        payload: res.data.data
      })

      // console.log(res.data)
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    })
}
export const getTravelers = (travelers) => dispatch => {
  dispatch({
    type: GET_TRAVELERS,
    payload: travelers
  })
}

export const fetchShippers = () => async dispatch => {
  axios
    .get(`${BASE_URL}/trips/shippers`)
    .then(res => {
      console.log(res.data.data[0])
      dispatch({
        type: FETCH_SHIPPERS,
        payload: res.data.data
      })

      // console.log(res.data)
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    })
}
// export const connectTraveler = (userDetails) => dispatch => {
//   axios.post(`${BASE_URL}/chat`, userDetails)
//   .then(res => {
//     dispatch({
//       type: CONNECT_TRAVELER,
//       payload: res
//     })
//   })
// }
export const connectTraveler = (userDetails) => dispatch => {
  axios.post(`${BASE_URL}/transactions/connect`, userDetails)
  .then(res => {
    dispatch({
      type: CONNECT_TRAVELER,
      payload: res
    })
  })
}
export const addTravelerEarning = (data) => dispatch => {
  axios.post(`${BASE_URL}/trips/earning`, data)
  .then(res => {
    console.log(res)
  })
}

export const respondToRequest = (data) => dispatch => {
  axios.post(`${BASE_URL}/transactions/respond`, data)
  .then(res => {
    console.log(res)
  })
}