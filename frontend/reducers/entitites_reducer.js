import { combineReducers } from 'redux';

import users from './users_reducer';
import therapists from './therapists_reducer';

export default combineReducers({
    users,
    // therapists
});
