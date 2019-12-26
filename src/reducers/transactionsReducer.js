import { FETCH_TRANSACTIONS } from '../actions/types'

export default (state = [], action) => {
  switch (action.payload) {
    case FETCH_TRANSACTIONS:
      return [...state, action.payload]
    default:
      return state
  }
}
