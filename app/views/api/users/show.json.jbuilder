
json.user do 
    json.partial! 'api/users/user', user: @user 
end 

json.topics do 
    @user.topics.each do |topic| 
        json.set! topic.id do 
            json.partial! 'api/topics/topic', topic: topic
        end  
    end 
end 

json.topic_interests do 
    @user.topic_interests.each do |topic_interest| 
        json.set! topic_interest.id do 
            json.partial! 'api/topic_interests/topic_interest', topic_interest: topic_interest
        end  
    end 
end 


json.chat_rooms do
    if @user.chat_rooms.is_a?(ChatRoom)
         json.partial! 'api/chat_rooms/chat_room', chat_room: @user.chat_rooms
    else 
        @user.chat_rooms.each do |chat_room| 
            json.set! chat_room.id do 
                json.partial! 'api/chat_rooms/chat_room', chat_room: chat_room
            end 
        end  
    end 
end 