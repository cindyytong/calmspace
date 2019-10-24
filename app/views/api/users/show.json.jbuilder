
json.user do 
    json.partial! 'api/users/user', user: @user 
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

if current_user.member_type == 'User'
    json.therapist do 
        json.partial! 'api/therapists/therapist', therapist: @user.therapist    
    end 
else 
    json.patients do 
        @user.patients.each do |patient|
            json.set! patient.id do 
                json.partial! 'api/patients/patient', patient: patient
            end 
        end 
    end 
end 