import { BASE_URL } from '../config/constants'
import { GET_ERRORS, UPDATE_BALANCE, SET_CURRENT_USER } from './types'
import axios from 'axios'

export const updateBalance = (data) => dispatch => {
    console.log(data)

    axios.put(`${BASE_URL}/users/updateMyBalance`, data)
        .then(response => {
            console.log(response.data)
            // dispatch({
            //     type: UPDATE_BALANCE,
            //     payload: response.data
            // })
            setCurrentUser()
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error
            })
        })
}

export const setCurrentUser = () => dispatch => {
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
