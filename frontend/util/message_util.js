export const getChatRoomMessages = chatRoomId => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `api/chat_rooms/${chatRoomId}/messages`,
    })
}

export const getMessage = messageId => {
    debugger
    return $.ajax({
        method: 'GET',
        url: `api/messages/${messageId}`
    })
}

