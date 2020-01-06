import { FETCH_SHIPPERS, GET_ERRORS } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SHIPPERS:
      return { ...state, shippers: action.payload }
    case GET_ERRORS:
      return { ...state, errors: action.payload }
    default:
      return state
  }
}
