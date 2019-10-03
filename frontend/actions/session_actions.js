import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const VERIFY_USER = 'VERIFY_USER';
export const CLEAR_VERIFIED_USER = 'CLEAR_VERIFIED_USER';

export const receiveCurrentUser = currentUser => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
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

// const verifyUser = user => ({
//     type: VERIFY_USER,
//     user
// });

// export const clearVerifiedUser = user => ({
//     type: CLEAR_VERIFIED_USER,
// });


export const login = ( user, type ) => dispatch => {
    return APIUtil.login(user, type).then(function(user) {
        dispatch(receiveCurrentUser(user)) })
        .fail(function(error) {
            dispatch(receiveErrors(error.responseJSON))
        })
    };
 

export const logout = () => dispatch => {
    return APIUtil.logout().then(user => (
            dispatch(logoutCurrentUser(user))
        ))
};

export const signup = (user, type) => dispatch => {
    return APIUtil.signup(user).then(function(user) {
        dispatch(receiveCurrentUser(user)) })
        .fail(function(error) {
            dispatch(receiveErrors(error.responseJSON))
        })
    };