import { POST_SUPPORT, GET_ERRORS, FETCH_TICKETS } from '../actions/types'
import axios from 'axios'

export const submitTicket = data => async dispatch => {
  await axios
    .post(`${process.env.REACT_APP_BASE_URL}/support/submit`, data)
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
    .get(`${process.env.REACT_APP_BASE_URL}/support/fetchSupport`)
    .then(res => {
      dispatch({
        type: FETCH_TICKETS,
        payload: res.data.tickets
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response
      })
    })
}
