import axios from 'axios'
import {
  FETCH_TRANSACTIONS,
  GET_ERRORS,
  TRANSACTION_RESPONSE,
  REDEEM_CODE,
  TIP_SUCCESS,
  GET_NOTIF,
  CANCEL_TRANSACTION,
  CANCEL_LOADING
} from './types'

export const getTransaction = () => async dispatch => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/transactions/fetchMyTransactions`
    )
    console.log(response)
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
export const postTransaction = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/transactions`, data)
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
}

export const markTravelerComplete = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/transactions/completetraveler`, data)
    .then(res => {
      console.log(res)
    })
}
export const markSenderComplete = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/transactions/completesender`, data)
    .then(res => {
      console.log(res)
    })
}

export const updateTrans = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/transactions/updatetrans`, data)
    .then(res => {
      console.log(res)
    })
}

// For the accept and reject endpoints
// /transactions/respond
// Body
// id: user id of the sender
// action: either 'accept' or 'decline'

export const handleTransactionRequest = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/transactions/respond`, data)
    .then(res => {
      dispatch({
        type: TRANSACTION_RESPONSE,
        payload: res.data.data
      })
    })
    .catch(err => dispatch({ type: 'GET_ERRORS', payload: err }))
}
export const redeemCode = data => dispatch => {
  axios
    .post(`${process.env.REACT_APP_BASE_URL}/transactions/redeemcode`, data)
    .then(res => {
      dispatch({
        type: REDEEM_CODE,
        payload: res.data
      })
      console.log(res)
    })
}
export const addTip = data => dispatch => {
  axios.post(`${process.env.REACT_APP_BASE_URL}/transactions/addtip`, data).then(res => {
    dispatch({
      type: TIP_SUCCESS,
      payload: res.data.status
    })
  })
}
export const getNotif = () => dispatch => {
  axios.get(`${process.env.REACT_APP_BASE_URL}/transactions/notif`)
  .then(res => {
    console.log(res)
    dispatch({
      type: GET_NOTIF,
      payload: res.data.notif
    })
  })
}
export const cancelTransaction = (data) => dispatch => {
  dispatch({
    type: CANCEL_LOADING,
    payload: true
  })
  axios.post(`${process.env.REACT_APP_BASE_URL}/transactions/cancel`, data)
  .then(res => {
    dispatch({
      type: CANCEL_TRANSACTION,
      payload: res.data.message
    })
    console.log(res)
  })
  .finally(() => {
    dispatch({
      type: CANCEL_LOADING,
      payload:false
    })
  })
}