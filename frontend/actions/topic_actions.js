import * as TopicApiUtil from '../util/topic_api_util';

export const RECEIVE_ALL_TOPICS = 'RECEIVE_ALL_TOPICS';
export const RECEIVE_TOPIC = 'RECEIVE_TOPIC';

const receiveAllTopics = topics => {
    return {
        type: RECEIVE_ALL_TOPICS,
        topics 
    }
};

const receiveTopic = topic => {
    return {
        type: RECEIVE_TOPIC,
        topic
    }
}

export const fetchTopics = () => dispatch => {
    return TopicApiUtil.fetchTopics().then(topics => dispatch(receiveAllTopics(topics)))
};

export const fetchTopic = () => dispatch => {
    return TopicApiUtil.fetchTopic().then(topic => dispatch(receiveTopic(topic)))
};


