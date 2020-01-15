import { BASE_URL } from '../config/constants'
import { POST_SUPPORT, GET_ERRORS, FETCH_TICKETS } from '../actions/types'
import axios from 'axios'

export const submitTicket = data => async dispatch => {
  await axios
    .post(`${BASE_URL}/support/submit`, data)
    .then(res => {
      dispatch({
        type: POST_SUPPORT,
        payload: res.message
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    })
}

export const fetchTickets = () => async dispatch => {
  await axios
    .get(`${BASE_URL}/support/fetchSupport`)
    .then(res => {
      dispatch({
        type: FETCH_TICKETS,
        payload: res.data.support
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    })
}
