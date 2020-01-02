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
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error
    })
  }
}
