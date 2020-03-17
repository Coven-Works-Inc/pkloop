import { FETCH_TRAVELERS, GET_ERRORS, GET_TRAVELERS, CONNECT_TRAVELER, MAKE_RESERVATION, RESERVTION_ERROR } from '../actions/types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRAVELERS:
      return { ...state, travelers: action.payload }
    case GET_ERRORS:
      return { ...state, errors: action.payload }
    case GET_TRAVELERS:
      return {...state, travelerData: action.payload}
    case CONNECT_TRAVELER:
      return {...state, connectDetails: action.payload}
    case MAKE_RESERVATION:
      return { ...state, message: action.payload}
    case RESERVTION_ERROR:
      return { ...state, errorMessage: action.payload}
    default:
      return state
  }
}
