debugger
@chat_rooms.each do |chat_room| 
 json.set! chat_room.id do
    json.partial! 'chat_room', chat_room: chat_room
  end
end 