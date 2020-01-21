import { GET_ERRORS, UPDATE_BALANCE, SET_CURRENT_USER, STRIPE_PAYMENT, REDUCE_BALANCE } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_BALANCE:
            return { ...state, balance: action.payload, status: action.status, updateSuccess: true }
        case REDUCE_BALANCE:
            return { ...state, balance: action.payload, status: action.status }
        case SET_CURRENT_USER:
            return { ...state, user: action.payload }
        case STRIPE_PAYMENT:
            return { ...state, payment: action.payload }
        case GET_ERRORS:
            return { ...state, errors: action.payload }
        default:
            return state
    }
}
