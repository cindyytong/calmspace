import {RECEIVE_ALL_MATCHES } from '../actions/user_actions';
import merge from 'lodash/merge';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

const _nullMatch= Object.freeze({
    id: null 
});

const matchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_MATCHES: 
            return merge({}, action.matches )
        case LOGOUT_CURRENT_USER:
            return _nullMatch;
        default: 
            return state;
    }
};

export default matchesReducer;