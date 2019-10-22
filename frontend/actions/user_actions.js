import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_ALL_MATCHES = 'RECEIVE_ALL_MATCHES';


// const receiveUser = ({user, topics, topic_interests, chat_rooms}) => {
//     debugger
//     return {
//         type: RECEIVE_USER,
//         user,
//         topics,
//         topic_interests,
//         chat_rooms 
//     }
// };

const receiveAllMatches = matches => {
    return {
        type: RECEIVE_ALL_MATCHES,
        matches
    }
}

export const fetchUser = id => dispatch => {
    debugger
    return UserApiUtil.fetchUser(id)
        .then(user => dispatch(receiveUser(user)))
};

export const updateUser = user => dispatch => {
    return UserApiUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
};


export const fetchMatches = () => dispatch => {
    return UserApiUtil.fetchMatches()
        .then(matches => dispatch(receiveAllMatches(matches)))
}
