

json.chatroom do 
    json.partial! 'api/chat_rooms/chat_room', chat_room: @chat_room 
end 

json.messages do 
    @chat_room.messages.each do |message| 
        json.set! message.id do 
            json.partial! 'api/messages/message', message: message 
        end 
    end 
end 
