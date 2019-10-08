export const getUserChatRoom = user_id => {
    return $.ajax({
        method: 'GET',
        url: 'api/chat_rooms',
        data: {
            user_id
        }
    })
}

// do I need separate utils for therapist and user? 
export const getTherapistChatRooms = therapist_id => {
    return $.ajax({
        method: 'GET',
        url: 'api/chat_rooms',
        data: {
            therapist_id
        }
    })
}

// Do I have to pass a chatroom into here? It just needs current_user and current_user.current_therapist_id
export const createChatRoom = (chatroom) => {
    return $.ajax({
        method: 'POST',
        url: 'api/chat_rooms',
        data: {
            chatroom
        }
    })
}