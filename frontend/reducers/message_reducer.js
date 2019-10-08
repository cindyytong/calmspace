import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState;
    switch (action.type){
        case RECEIVE_MESSAGES:
            newState = Object.assign({}, action.messages);
        case RECEIVE_MESSAGES:
            newState = Object.assign({}, state);
            newState[action.message.id] = action.message;
        default: 
            return state;
    }
}

export default messagesReducer;