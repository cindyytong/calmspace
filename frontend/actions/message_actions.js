import * as MessageAPIUtil from '../util/message_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

const receiveMessages = messages => ({
    type: RECEIVE_MESSAGES,
    messages 
});

// Do I need a receiveMessage?

const receiveMessage = message => ({
    type: RECEIVE_MESSAGES,
    message 
})


export const getChatRoomMessages = chatRoomId => dispatch => {
    return MessageAPIUtil.getChatRoomMessages(chatRoomId)
        .then( messages => {
            dispatch(receiveMessages(messages))
        })
};

