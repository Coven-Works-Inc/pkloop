// import { process.env.BASE_URL } from '../config/constants'
import {
    GET_ERRORS,
    SET_CURRENT_USER,
    STRIPE_PAYMENT,
    UPDATE_BALANCE,
    REDUCE_BALANCE,
    PAYMENT_SUCCESS,
    PAYOUT_ERROR,
    IS_LOADING
  } from './types'
  import axios from 'axios'
  
  export const updateBalance = data => dispatch => {
    console.log(data)
  
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/users/updateMyBalance`, data)
      .then(response => {
        console.log(response)
        dispatch({
          type: UPDATE_BALANCE,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_ERRORS,
          payload: error
        })
      })
  }
  
  export const reduceBalance = data => dispatch => {
    console.log(data)
  
    axios
      .put(`${process.env.REACT_APP_BASE_URL}/users/reduceMyBalance`, data)
      .then(response => {
        console.log(response)
        dispatch({
          type: REDUCE_BALANCE,
          payload: response.data,
          status: response.status
        })
      })
      .catch(error => {
        dispatch({
          type: GET_ERRORS,
          payload: error
        })
      })
  }
  export const setCurrentUser = () => dispatch => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/fetchUser`)
      .then(response => {
        dispatch({
          type: SET_CURRENT_USER,
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: GET_ERRORS,
          payload: error
        })
      })
  }
  
  export const payWithStripe = data => dispatch => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/payments`, data)
      .then(response => {
        console.log(response)
        dispatch({
          type: STRIPE_PAYMENT,
          payload: response.data.success
        })
        updateBalance({ amount: response.data.success.amount })
      })
      .catch(error => {
        dispatch({
          type: GET_ERRORS,
          payload: error
        })
      })
  }
export const payoutFund = (data) => dispatch => {
    dispatch({
      type: IS_LOADING,
      payload: true
    })
    axios.post(`${process.env.REACT_APP_BASE_URL}/payments/payout`, data)
    .then(res => {
      console.log(res)
      dispatch({
        type: PAYMENT_SUCCESS,
        payload: res.data.status
      })
    })
    .catch(err => {
      dispatch({
        type: PAYOUT_ERROR,
        payload: { message: "we are unable to process your request now"}
      })
    })
    .finally(() => {
      dispatch({
        type: IS_LOADING,
        payload:false
      })
    }) 
}
export const reduceEscrow = (data) => dispatch => {
  axios.put(`${process.env.REACT_APP_BASE_URL}/users/reduceEscrow`, data)
  .then(res => {
    console.log(res)
  })
}