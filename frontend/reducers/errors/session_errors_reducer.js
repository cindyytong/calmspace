import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../../actions/session_actions';
import merge from 'lodash/merge';

const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState; 
    switch(action.type){
        case RECEIVE_SESSION_ERRORS:
            newState = action.errors;
            return merge([], state, newState)
        case RECEIVE_CURRENT_USER: 
            return [];
        case CLEAR_ERRORS: 
            return [];
        default: 
            return state;
    }
};

export default sessionErrorsReducer;