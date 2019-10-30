import { RECEIVE_CHATROOM, RECEIVE_CHATROOMS } from '../actions/chat_room_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_CURRENT_THERAPIST,LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullChatroom = Object.freeze({
    id: null 
});

const chatRoomsReducer = ( state = {}, action ) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, { [action.chat_rooms.id]: action.chat_rooms} )
        case RECEIVE_CURRENT_THERAPIST: 
            return merge({}, state, action.chat_rooms )
        case RECEIVE_CHATROOMS:
            return merge({}, action.chatrooms);
        case RECEIVE_CHATROOM:
            newState = merge({}, state, { [action.chatroom.id]: action.chatroom });
            return newState;
        case LOGOUT_CURRENT_USER:
            return _nullChatroom;
        default: 
            return state;
    }
};

export default chatRoomsReducer;