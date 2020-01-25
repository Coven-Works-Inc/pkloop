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