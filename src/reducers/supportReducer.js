import { FETCH_TICKETS, GET_ERRORS } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TICKETS:
      return {
        ...state,
        tickets: action.payload
      }
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state
  }
}
