import axios from 'axios'
import { BASE_URL } from '../config/constants'
import { FETCH_TRANSACTIONS, GET_ERRORS } from './types'

export const getTransactions = id => dispatch => {
  axios
    .get(`${BASE_URL}/transactions/:id`)
    .then(res =>
      dispatch({
        type: FETCH_TRANSACTIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    )
}
