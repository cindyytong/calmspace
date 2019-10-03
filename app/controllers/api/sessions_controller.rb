class Api::SessionsController < ApplicationController 
    def create
        memberType = params[:type].titleize.constantize
        @user = memberType.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        
        if @user
            login!(@user)
            render json: @user 
        else 
            render json: ["Invalid email/password combination"], status: 401
        end 
    end 

    def destroy
        if current_user
            debugger
            logout!
            render json: {}  
        else 
            render json: ["Not currently signed in"], status: 404
        end 
    end
end 