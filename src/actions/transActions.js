import axios from 'axios'
import { BASE_URL } from '../config/constants'
import { FETCH_TRANSACTIONS, GET_ERRORS } from './types'

export const getTransaction = () => async dispatch => {
  try {
    const response = await axios.get(
      `${BASE_URL}/transactions/fetchMyTransactions`
    )
    dispatch({
      type: FETCH_TRANSACTIONS,
      payload: response.data.data
    })
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  }
}
export const postTransaction = (data) => dispatch => {
  axios.post(`${BASE_URL}/transactions`, data)
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
}

export const markTravelerComplete = (data) => dispatch => {
  axios.post(`${BASE_URL}/transactions/completetraveler`, data)
    .then(res => {
      console.log(res)
    })
}
export const markSenderComplete = (data) => dispatch => {
  axios.post(`${BASE_URL}/transactions/completesender`, data)
    .then(res => {
      console.log(res)
    })
}

export const updateTrans = (data) => dispatch => {
  axios.post(`${BASE_URL}/transactions/updatetrans`, data)
    .then(
      res => {
        console.log(res)
      }
    )
}

// For the accept and reject endpoints
// /transactions/respond
// Body
// id: user id of the sender
// action: either 'accept' or 'decline'

export const handleTransactionRequest = (data) => dispatch => {
  axios.post(`${BASE_URL}/transactions/respond`, data)
    .then(res => {
      console.log(res.data)
      dispatch({
        type: 'TRANSACTION RESPONSE',
        payload: res.data
      })
    })
    .catch(err => dispatch({ type: 'GET_ERRORS', payload: err }));
}
