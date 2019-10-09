import * as MessageAPIUtil from '../util/message_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = messages => {
    debugger
    return {
        type: RECEIVE_MESSAGES,
        messages 
    }
};


const receiveMessage = message => {
    debugger
    return {
        type: RECEIVE_MESSAGE,
        message 
    }
};

export const getMessage = messageId => dispatch => {
    return MessageAPIUtil.getMessage(messageId)
        .then( message => {
            debugger
            dispatch(receiveMessage(message))
        })
};

export const getChatRoomMessages = chatRoomId => dispatch => {
    debugger
    return MessageAPIUtil.getChatRoomMessages(chatRoomId)
        .then( messages => {
            debugger
            dispatch(receiveMessages(messages))
        });
};

