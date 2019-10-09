import { RECEIVE_CHATROOM, RECEIVE_CHATROOMS } from '../actions/chat_room_actions';
import { merge } from 'lodash';


const chatRoomsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let newState;
    debugger
    switch(action.type){
        case RECEIVE_CHATROOMS:
            return merge({}, action.chatrooms);
        case RECEIVE_CHATROOM:
            newState = merge({}, state, { [action.chatroom.id]: action.chatroom });
            return newState;
        default: 
            return state;
    }
};

export default chatRoomsReducer;