import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullTopicInterest = Object.freeze({
    id: null 
});

const TopicInterestsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return merge({}, oldState, action.topic_interests)
        case LOGOUT_CURRENT_USER:
            return _nullTopicInterest;
        default: 
            return oldState;
    }
}

export default TopicInterestsReducer;