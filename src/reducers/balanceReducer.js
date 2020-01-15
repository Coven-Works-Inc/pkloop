import { GET_ERRORS, UPDATE_BALANCE, SET_CURRENT_USER } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_BALANCE:
            return { ...state, balance: action.payload }
        case SET_CURRENT_USER:
            return { ...state, balance: action.payload }
        case GET_ERRORS:
            return { ...state, errors: action.payload }
        default:
            return state
    }
}
