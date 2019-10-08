import { combineReducers } from 'redux';

import users from './users_reducer';
// import therapists from './therapists_reducer';
import matches from './matches_reducer';
import topics from './topics_reducer';
import chatrooms from './chatroom_reducer';
import messages from './message_reducer'

export default combineReducers({
    users,
    // therapists,
    matches,
    topics,
    chatrooms,
    messages
});
