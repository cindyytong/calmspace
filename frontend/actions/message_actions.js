import * as MessageAPIUtil from '../util/message_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = messages => {
    return {
        type: RECEIVE_MESSAGES,
        messages 
    }
};


const receiveMessage = message => {
    return {
        type: RECEIVE_MESSAGE,
        message 
    }
};

export const getMessage = messageId => dispatch => {
    return MessageAPIUtil.getMessage(messageId)
        .then( message => {
            dispatch(receiveMessage(message))
        })
};

export const getChatRoomMessages = chatRoomId => dispatch => {
    return MessageAPIUtil.getChatRoomMessages(chatRoomId)
        .then( messages => {
            dispatch(receiveMessages(messages))
        });
};

export const createMessage = (message) => dispatch => {
    return MessageAPIUtil.createMessage(message)
        .then( message => {
            dispatch(receiveMessage(message))
        })
};