class Api::MessagesController < ApplicationController
    # before_action :require_logged_in
    def index 
        if (params[:chat_room_id])
            @messages = Message.where(chat_room_id: params[:chat_room_id]).to_a
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

    def create 
        debugger
        @message = Message.new(message_params)
        if @message.save 
            render :show
        end 
    end 

    def message_params 
        params.require(:message).permit(:body, :chat_room_id, :messageable_id, :messageable_type)
    end 
end
