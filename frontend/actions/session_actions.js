import * as APIUtil from '../util/session_api_util';

export const RECEIVE_NEW_USER = 'RECEIVE_NEW_USER';
export const RECEIVE_NEW_THERAPIST = 'RECEIVE_NEW_THERAPIST';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_CURRENT_THERAPIST = 'RECEIVE_CURRENT_THERAPIST';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveNewUser = ({user}) => {
    return {
        type: RECEIVE_NEW_USER,
        user 
    }
};

export const receiveNewTherapist = ({therapist}) => {
    return {
        type: RECEIVE_NEW_USER,
        therapist 
    }
};

export const receiveCurrentUser = ({user, chat_rooms, therapist}) => {
    debugger
    return {
        type: RECEIVE_CURRENT_USER,
        user,
        chat_rooms,  
        therapist
    }
};

export const receiveCurrentTherapist = ({users, chat_rooms, therapist, notes}) => {
    return {
        type: RECEIVE_CURRENT_THERAPIST,
        users,
        chat_rooms,  
        therapist,
        notes
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
   if(type === 'user'){
    return APIUtil.login(user, type).then(function(userPayload) {
        dispatch(receiveCurrentUser(userPayload));
        return userPayload.user.id  })
       .fail(function(error) {
           dispatch(receiveErrors(error.responseJSON))
       });  
   } else {
    return APIUtil.login(user, type).then(function(therapistPayLoad) {
        dispatch(receiveCurrentTherapist(therapistPayLoad));
        debugger
        return therapistPayLoad.therapist.id })
       .fail(function(error) {
           dispatch(receiveErrors(error.responseJSON))
       });  
   }
};
 

export const logout = () => dispatch => {
    return APIUtil.logout().then(user => (
            dispatch(logoutCurrentUser(user))
        ))
};

// export const signup = (user, type) => dispatch => {
//     debugger
//     return APIUtil.signup(user, type).then(function(user) {
//         dispatch(receiveCurrentUser(user)) })
//         .fail(function(error) {
//             dispatch(receiveErrors(error.responseJSON))
//         })
//     };

export const signup = ( user, type ) => dispatch => {
    if(type === 'user'){
        debugger
     return APIUtil.signup(user, type).then(function(userPayload) {
         dispatch(receiveNewUser(userPayload));
         debugger
         return userPayload.user.id  })
        .fail(function(error) {
            dispatch(receiveErrors(error.responseJSON))
        });  
    } else {
     return APIUtil.signup(user, type).then(function(therapistPayLoad) {
         dispatch(receiveNewTherapist(therapistPayLoad));
         return therapistPayLoad.therapist.id })
        .fail(function(error) {
            dispatch(receiveErrors(error.responseJSON))
        });  
    }
 };