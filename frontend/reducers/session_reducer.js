import { RECEIVE_NEW_USER, RECEIVE_NEW_THERAPIST, RECEIVE_CURRENT_USER, RECEIVE_CURRENT_THERAPIST, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullUser = Object.freeze({
    id: null 
});

const sessionReducer = ( state = _nullUser, action ) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_NEW_USER: 
        case RECEIVE_CURRENT_USER:
            return { 
                currentUserId: action.user.id,
                memberType: 'User'
             };
        case RECEIVE_NEW_THERAPIST: 
        case RECEIVE_CURRENT_THERAPIST:
        return { 
            currentUserId: action.therapist.id,
            memberType: 'Therapist'
            };
        case LOGOUT_CURRENT_USER: 
            return _nullUser;
        default: 
            return state;
    }
};

export default sessionReducer;