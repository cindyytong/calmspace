import { RECEIVE_USER } from '../actions/user_actions'
import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions'
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
    id: null 
});

const usersReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, { [action.user.id]: action.user })
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default: 
            return state;
    }
};

export default usersReducer 