class Api::ChatRoomsController < ApplicationController 
# before_action :require_logged_in 

def create 
    debugger
    @chat_room = ChatRoom.new(chat_room_params) # pass in current_user.id and current_user.current_therapist_id
    if @chat_room.save 
        render :show 
    else 
        render json: @chat_room.errors.full_messages, status: 422
    end 
end 

def chat_room_params
    params.require(:chat_room).permit(:user_id, :therapist_id) 
end 
end 