import { POST_TRIP, GET_ERRORS, SET_TRAVELER } from '../actions/types'

const initialState = {
  message: '',
  trip: {
    data: {
      _id: ''
    }
  }
}

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_TRIP:
      return {
        ...state,
        message: action.payload
      }
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      }
    case SET_TRAVELER:
      return {
        ...state,
        trip: action.payload
      }
    default:
      return state
  }
}
