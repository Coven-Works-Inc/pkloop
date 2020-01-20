import { FETCH_TRAVELERS, GET_ERRORS, GET_TRAVELERS, CONNECT_TRAVELER } from '../actions/types'

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
    default:
      return state
  }
}
