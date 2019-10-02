import { combineReducers } from 'redux';

import userSession from './user_session_reducer';
import therapistSession from './therapist_session_reducer';

export default combineReducers({
    userSession,
    therapistSession
});
