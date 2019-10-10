import { RECEIVE_CHATROOMS, RECEIVE_CHATROOM, RECEIVE_CHATROOM_ERRORS } from '../../actions/chat_room_actions';
import { CLEAR_ERRORS } from '../../actions/session_actions';

const chatRoomErrorsReducer = ( state = [], action ) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CHATROOM_ERRORS:
            return state.concat(action.errors);
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_CHATROOM: // clears errors when loading new chatroom
            return [];
        case RECEIVE_CHATROOMS:
            return [];
        default: 
            return state;
    }
};

export default chatRoomErrorsReducer;