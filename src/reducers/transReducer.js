import { FETCH_TRANSACTIONS, GET_ERRORS, TRANSACTION_RESPONSE, REDEEM_CODE, TIP_SUCCESS } from '../actions/types'

const initialState = {
  res: {},
  success: false
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
    case REDEEM_CODE:
      return { ...state, success: true} 
    case TIP_SUCCESS:
      return { ...state, tipSuccess: action.payload}
    default:
      return state
  }
}
