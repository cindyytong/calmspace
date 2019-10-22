import { RECEIVE_ALL_TOPICS, RECEIVE_TOPIC } from '../actions/topic_actions';
import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullTopic = Object.freeze({
    id: null 
});

const TopicsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_CURRENT_USER: 
            return merge({}, oldState, action.topics)
        case RECEIVE_ALL_TOPICS:
            return merge({}, action.topics);
        case RECEIVE_TOPIC: 
            return merge({}, oldState, {[action.topic.id]: action.topic});
        case LOGOUT_CURRENT_USER:
            return _nullTopic;
        default: 
            return oldState;
    }
}

export default TopicsReducer;