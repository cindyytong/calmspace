class Api::MessagesController < ApplicationController
    # before_action :require_logged_in
    def index 

    end 

    # def create   ## handled by actionc able
    # end 

    def message_params 
        params.require(:message).permit(:body)
    end 
end
