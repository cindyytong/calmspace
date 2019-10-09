import * as ChatRoomAPIUtil from '../util/chat_room_util';

export const RECEIVE_CHATROOMS = 'RECEIVE_CHATROOMS';
export const RECEIVE_CHATROOM = 'RECEIVE_CHATROOM';
export const RECEIVE_CHATROOM_ERRORS = 'RECEIVE_CHATROOM_ERRORS';

// therapist only 
export const receiveChatRooms = chatrooms => {
    return {
        type: RECEIVE_CHATROOMS,
        chatrooms 
    }
}

// patient & therapist 
export const receiveChatRoom = chatroom => {
    debugger
    return {
        type: RECEIVE_CHATROOM,
        chatroom 
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_CHATROOM_ERRORS,
        errors
    }
}

export const getUserChatRoom = chatRoomId => dispatch => {
    debugger
    return ChatRoomAPIUtil.getUserChatRoom(chatRoomId)
        .then( chatRoom => {
            dispatch(receiveChatRoom(chatRoom))
        })
};

// .catch( errors => dispatch(receiveErrors(errors.responseJSON)))

export const getTherapistChatRooms = chatRoomIds => dispatch => {
    return ChatRoomAPIUtil.getTherapistChatRooms(chatRoomIds)
        .then( chatRooms => {
            dispatch(receiveChatRooms(chatRooms))
        })
};

export const createChatRoom = chatRoom => dispatch => {
    return ChatRoomAPIUtil.createChatRoom(chatRoom)
        .then( chatRoom => {
            dispatch(receiveChatRoom(chatRoom))
        })
};

