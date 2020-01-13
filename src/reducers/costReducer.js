import { ADD_INSURANCE } from "../actions/types";

const initialState = {
    status: ''
}

export default function(state = initialState, action) {
    switch(action.type){
        case ADD_INSURANCE:
            return {
                ...state,
                status: action.payload,
                success: true,
            }
        default:
            return state
    }
}