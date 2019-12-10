import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
// import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, LOADING, SET_TOKEN } from './types'
import { BASE_URL } from '../config/constants'
import { dispatch } from '../../../Library/Caches/typescript/3.6/node_modules/rxjs/internal/observable/pairs'

export const postTrip = (tripData, history) => dispatch => {
  dispatch({
    type: LOADING,
    payload: true
  })

  dispatch({
    type: GET_ERRORS,
    payload: { message: '' }
  })

  axios
    .post(`${BASE_URL}/trips`, ttripData)
    .then(res => {
      history.push('/tripsuccess')
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
          ? err.response.data
          : { message: 'Something went wrong, please try again' }
      })
    })
    .finally(() =>
      dispatch({
        type: LOADING,
        payload: false
      })
    )
}
