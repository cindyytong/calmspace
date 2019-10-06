import { RECEIVE_THERAPIST } from '../actions/therapist_actions'
import merge from 'lodash/merge';

const therapistsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_THERAPIST: 
            return merge({}, state, { [action.therapist.id]: action.therapist })
        default: 
            return state;
    }
};

export default therapistsReducer 