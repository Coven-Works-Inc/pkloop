import { LOADING } from '../actions/types'

const initialState = false

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return action.payload
    default:
      return state
  }
}
