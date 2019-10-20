class Api::ChatRoomsController < ApplicationController 
# before_action :require_logged_in 
def index 
    # Check if authorized user 
    if (params[:user_id].to_i != current_user.id) && (params[:therapist_id] != current_user.id/Users/cindytong/Desktop/halcyon/app/controllers/api/chat_rooms_controller.rb)
        render json: ["Unauthorized user"], status: 401 
    # find chatroom for user 
    elsif params[:user_id]
         @chat_room = ChatRoom.includes(:messages, :therapist).where(:user_id => params[:user_id]).to_a
         render :show
    # find chatrooms for therapist; can return many 
    elsif params[:therapist_id]
        @chat_rooms = ChatRoom.includes(:messages, :therapist).where(:therapist_id => params[:therapist_id]).to_a
         render :index
    # chatroom not found 
    else 
         render json: ["Chatroom not found based on user/therapist id"], status: 404
    end 
end 

def create 
    @chat_room = ChatRoom.new() 
    @chat_room.user_id = current_user.id 
    @chat_room.therapist_id = current_user.current_therapist_id 

    if @chat_room.save 
        render :show 
    else 
        render json: @chat_room.errors.full_messages, status: 422
    end 
end 

def show  # show one chatroom 
    @chat_room = ChatRoom.includes(:user, :therapist, :messages, :note).find(params[:chatroom_id])
    if @chat_room
        render :show 
    else 
        render json: ["Chatroom not found"], status: 404
    end 
end 

def get_chatroom_id 
    @chat_room_id = ChatRoom.where(user_id: params[:user_id])
    if @chat_room
        render @chat_room_id.id 
    else 
        render json: ["Chatroom not found"], status: 404
    end 
end 

def chat_room_params
    params.require(:chat_room).permit(:user_id, :therapist_id) 
end 
end 