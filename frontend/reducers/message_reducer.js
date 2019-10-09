import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    debugger
    switch (action.type){
        case RECEIVE_MESSAGES:
            newState = Object.assign({}, action.messages);
            return newState;
        case RECEIVE_MESSAGE:
            newState = Object.assign({}, state);
            newState[action.message.id] = action.message;
            return newState;
        default: 
            return state;
    }
}

export default messagesReducer;