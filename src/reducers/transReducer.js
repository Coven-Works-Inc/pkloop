import { FETCH_TRANSACTIONS, GET_ERRORS } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, transaction: action.payload }
    case GET_ERRORS:
      return { ...state, errors: action.payload }
    default:
      return state
  }
}
