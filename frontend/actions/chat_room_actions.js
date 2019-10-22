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
export const receiveChatRoom = ({chatroom, messages}) => {
    return {
        type: RECEIVE_CHATROOM,
        chatroom, 
        messages  
    }
}

const receiveErrors = errors => {
    return {
        type: RECEIVE_CHATROOM_ERRORS,
        errors
    }
}

// export const getChatRoomId = userId  => {
//     return ChatRoomAPIUtil.getChatRoomId(userId)
// }

export const getChatRoomId = () => {
    return ChatRoomAPIUtil.getChatRoomId()
}

export const getUserChatRoom = chatRoomId => dispatch => {
    return ChatRoomAPIUtil.getUserChatRoom(chatRoomId)
        .then( chatRoom => {
            dispatch(receiveChatRoom(chatRoom))
        })
};



export const getTherapistChatRooms = chatRoomIds => dispatch => {
    return ChatRoomAPIUtil.getTherapistChatRooms(chatRoomIds)
        .then( chatRooms => {
            dispatch(receiveChatRooms(chatRooms))
        })
};

export const createChatRoom = () => dispatch => {    
    return ChatRoomAPIUtil.createChatRoom()
        .then( chatRoom => {
            dispatch(receiveChatRoom(chatRoom))
        })
};

