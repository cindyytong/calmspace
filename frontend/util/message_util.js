export const getChatRoomMessages = chatRoomId => {
    $.ajax({
        method: 'GET',
        url: 'api/messages',
    })
}

export const getMessage = messageId => {
    $.ajax({
        method: 'GET',
        url: `api/messages/${messageId}`
    })
}

