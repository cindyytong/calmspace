import { RECEIVE_ALL_TOPICS, RECEIVE_TOPIC } from '../actions/topic_actions';
import merge from 'lodash/merge';

const TopicsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    switch(action.type){
        case RECEIVE_ALL_TOPICS:
            return merge({}, action.topics);
        case RECEIVE_TOPIC: 
            return merge({}, oldState, {[action.topic.id]: action.topic});
        default: 
            return oldState;
    }
}

export default TopicsReducer;