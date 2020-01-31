import { FETCH_TRANSACTIONS, GET_ERRORS, TRANSACTION_RESPONSE } from '../actions/types'

const initialState = {
  res: {}
}
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, transaction: action.payload }
    case GET_ERRORS:
      return { ...state, errors: action.payload }
    case TRANSACTION_RESPONSE:
      console.log(action.payload)
      return {...state, res: action.payload}
    default:
      return state
  }
}
