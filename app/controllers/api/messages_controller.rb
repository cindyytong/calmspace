class Api::MessagesController < ApplicationController
    # before_action :require_logged_in
    def index 
        if (params[:chat_room_id])
            debugger
            @messages = Message.where(chat_room_id: params[:chat_room_id])
            render :index
        else
            render json: ["Chatroom not found"], status: 404 
        end 
    end 

    def show 
        @message = Message.find(params[:id])
        if @message
            render :show 
        else 
            render json: ["Message not foound"], status: 404
        end 
    end 

    # def create   ## handled by actionc able
    # end 

    def message_params 
        params.require(:message).permit(:body)
    end 
end
