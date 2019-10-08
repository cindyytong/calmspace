class Api::ChatRoomsController < ApplicationController 
# before_action :require_logged_in 
def index 
    if params[:user_id]
         @chat_rooms = User.find(params[:user_id]).chat_room.includes(:message, :therapist)
         render :show
    elsif params[:therapist_id]
         @chat_rooms = Therapist.find(params[:therapist_id]).chat_room.includes(:messages, :user)
         render :show
    else 
         render json: ["Chatroom not found based on user/therapist id"], status: 404
    end 
end 

def create 
    @chat_room = ChatRoom.new(chat_room_params) # pass in current_user.id and current_user.current_therapist_id
    if @chat_room.save 
        render :show 
    else 
        render json: @chat_room.errors.full_messages, status: 422
    end 
end 

def show 
    @chat_room = ChatRoom.includes(:user, :therapist, :messages, :note).find(params[:id])
    if @chat_room
        render :show 
    else 
        render json: ["Chatroom not found"], status: 404
    end 
end 


def chat_room_params
    params.require(:chat_room).permit(:user_id, :therapist_id) 
end 
end 