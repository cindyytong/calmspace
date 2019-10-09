export const getChatRoomMessages = chatRoomId => {
    $.ajax({
        method: 'GET',
        url: 'api/messages',
        data: {
            chat_room_id: chatRoomId
        }
    })
}

export const getMessage = messageId => {
    debugger
    $.ajax({
        method: 'GET',
        url: `api/messages/${messageId}`
    })
}

