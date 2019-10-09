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
