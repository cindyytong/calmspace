import {RECEIVE_ALL_MATCHES } from '../actions/user_actions';
import merge from 'lodash/merge';

const matchesReducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_ALL_MATCHES: 
            return merge({}, action.matches )
        default: 
            return state;
    }
};

export default matchesReducer;