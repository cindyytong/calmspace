import * as TopicInterestAPIUtil from '../util/topic_interest_api_util';

export const RECEIVE_TOPIC_INTEREST = 'RECEIVE_TOPIC_INTEREST';

export const receiveTopicInterest = topicInterest => {
    debugger
    return {
        type: RECEIVE_TOPIC_INTEREST,
        topicInterest
    }
};


export const createTopicInterest = (userId, topicId, userType = "User") => dispatch => {
    debugger
    return TopicInterestAPIUtil.createTopicInterest(userId, topicId, userType)
        .then(topicInterest => dispatch(receiveTopicInterest))
};

