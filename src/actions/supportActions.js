import { BASE_URL } from '../config/constants'
import { POST_SUPPORT } from '../actions/types'
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
