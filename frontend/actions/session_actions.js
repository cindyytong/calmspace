import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveCurrentUser = ({user, topics, topic_interests, chat_rooms, therapist, patients}) => {
    debugger
    return {
        type: RECEIVE_CURRENT_USER,
        user,
        topics,
        topic_interests,
        chat_rooms,  
        therapist,
        patients
    }
};

export const logoutCurrentUser = () => {
    return { 
        type: LOGOUT_CURRENT_USER
    }
};

export const receiveErrors = errors => {
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
};

export const clearErrors = () => ({
    type: CLEAR_ERRORS
});


export const login = ( user, type ) => dispatch => {
    return APIUtil.login(user, type).then(function(userPayload) {
         dispatch(receiveCurrentUser(userPayload));
         return userPayload.user.id;  })
        .fail(function(error) {
            dispatch(receiveErrors(error.responseJSON))
        });
        
    };
 

export const logout = () => dispatch => {
    return APIUtil.logout().then(user => (
            dispatch(logoutCurrentUser(user))
        ))
};

export const signup = (user, type) => dispatch => {
    return APIUtil.signup(user, type).then(function(user) {
        dispatch(receiveCurrentUser(user)) })
        .fail(function(error) {
            dispatch(receiveErrors(error.responseJSON))
        })
    };