import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';
import { RECEIVE_CHATROOM } from '../actions/chat_room_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';


const _nullMessage = Object.freeze({
    id: null 
});


const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type){
        case RECEIVE_CHATROOM:
            newState = Object.assign({}, action.messages);
            return newState; 
        case RECEIVE_MESSAGES:
            newState = Object.assign({}, action.messages);
            return newState;
        case RECEIVE_MESSAGE:
            newState = Object.assign({}, state);
            newState[action.message.id] = action.message;
            return newState;
        case LOGOUT_CURRENT_USER:
            return _nullMessage;
        default: 
            return state;
    }
}

export default messagesReducer;