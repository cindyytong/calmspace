import { combineReducers } from 'redux';
import session from './errors/session_errors_reducer';
import chatroom from './errors/chatroom_errors_reducer';

export default combineReducers({
    session,
    chatroom
});