import { CHATROOM_JOINED } from '../actions/types';

const initialState = {
    user: {

    }
}

export default function(state=initialState, action){
    switch(action.type){
        case CHATROOM_JOINED:
            return{
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}