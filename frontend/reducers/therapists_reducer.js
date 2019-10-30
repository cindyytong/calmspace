import { RECEIVE_THERAPIST } from '../actions/therapist_actions'
import { RECEIVE_CURRENT_USER, RECEIVE_CURRENT_THERAPIST, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullTherapist= Object.freeze({
    id: null 
});

const therapistsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return merge({}, state, { [action.therapist.id]: action.therapist });
        case RECEIVE_CURRENT_THERAPIST: 
            return merge({}, state, { [action.therapist.id]: action.therapist })
        case RECEIVE_THERAPIST: 
            return merge({}, state, { [action.therapist.id]: action.therapist })
        case LOGOUT_CURRENT_USER:
            return _nullTherapist;
        default: 
            return state;
    }
};

export default therapistsReducer 