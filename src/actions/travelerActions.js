import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
// import jwt_decode from 'jwt-decode';

import { FETCH_TRAVELERS, GET_ERRORS } from './types'

import { BASE_URL } from '../config/constants'

export const fetchTravelers = () => async dispatch => {
  await axios
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
