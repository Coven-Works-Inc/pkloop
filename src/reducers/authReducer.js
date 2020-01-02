import isEmpty from '../utils/validation'

import { SET_CURRENT_USER, SET_TOKEN, GET_ERRORS, LOADING } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {},
  error: '',
  token: '',
  loading: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    case GET_ERRORS: 
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    case LOADING:
      return {
        ...state,
        loading: action.payload
      }

    default:
      return state
  }
}
