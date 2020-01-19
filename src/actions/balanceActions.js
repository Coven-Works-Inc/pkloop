import { BASE_URL } from '../config/constants'
import { GET_ERRORS, SET_CURRENT_USER, STRIPE_PAYMENT, UPDATE_BALANCE } from './types'
import axios from 'axios'

export const updateBalance = (data) => dispatch => {
    console.log(data)

    axios.put(`${BASE_URL}/users/updateMyBalance`, data)
        .then(response => {
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

export const setCurrentUser = () => dispatch => {
    console.log('...calling fetchuser')
    axios.get(`${BASE_URL}/users/fetchUser`)
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

export const payWithStripe = (data) => dispatch => {
    axios.post(`${BASE_URL}/payments`, data)
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
