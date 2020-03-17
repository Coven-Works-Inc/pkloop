import { FETCH_TRANSACTIONS, GET_ERRORS, TRANSACTION_RESPONSE, REDEEM_CODE, TIP_SUCCESS, GET_NOTIF, CANCEL_TRANSACTION, CANCEL_LOADING } from '../actions/types'

const initialState = {
  res: {},
  success: false,
  cancelSuccess: ''
}
export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, transaction: action.payload }
    case GET_ERRORS:
      return { ...state, errors: action.payload }
    case TRANSACTION_RESPONSE:
      return {...state, res: action.payload }
    case REDEEM_CODE:
      return { ...state, success: true} 
    case TIP_SUCCESS:
      return { ...state, tipSuccess: action.payload }
    case GET_NOTIF: 
      return { ...state, notif: action.payload }
    case CANCEL_TRANSACTION:
      return { ...state, cancelSuccess: action.payload }
    case CANCEL_LOADING:
      return {...state, cancelLoading: action.payload }
    default:
      return state
  }
}
