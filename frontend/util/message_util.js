export const getChatRoomMessages = chatRoomId => {
    return $.ajax({
        method: 'GET',
        url: `api/chat_rooms/${chatRoomId}/messages`,
    })
}

export const getMessage = messageId => {
    return $.ajax({
        method: 'GET',
        url: `api/messages/${messageId}`
    })
}

export const createMessage = (message) => {
    debugger
    return $.ajax({
        method: 'POST',
        url: `api/chat_rooms/${message.chat_room_id}/messages`,
        data: { message }
    })
}