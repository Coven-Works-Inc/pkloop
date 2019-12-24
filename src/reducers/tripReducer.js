import { POST_TRIP, GET_ERRORS } from '../actions/types'

const initialState = {
  message: ''
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
    default:
      return state
  }
}
