import isEmpty from '../utils/validation'

import { SET_CURRENT_USER, SET_TOKEN } from '../actions/types'

const initialState = {
  isAuthenticated: false,
  user: {},
  token: ''
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
    default:
      return state
  }
}
