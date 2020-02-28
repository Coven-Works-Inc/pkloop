import 
    { GET_ERRORS, 
    UPDATE_BALANCE, 
    SET_CURRENT_USER, 
    STRIPE_PAYMENT, 
    REDUCE_BALANCE,
    PAYMENT_SUCCESS,
    IS_LOADING,
    PAYOUT_ERROR,  
    REDUCE_ESCROW
} from '../actions/types'

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
        case PAYMENT_SUCCESS:
            return { ...state, paymentSuccess: action.payload }
        case IS_LOADING:
            return {...state, isLoading: action.payload }
        case PAYOUT_ERROR: 
            return { ...state, payoutError: action.payload }
        case REDUCE_ESCROW: 
            return { ...state, status: action.payload }
        default:
            return state
    }
}
