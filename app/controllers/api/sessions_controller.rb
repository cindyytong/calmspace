class Api::SessionsController < ApplicationController 
    def create
        memberType = params[:type].titleize.constantize
        @user = memberType.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        
        if @user
            login!(@user)
            # where does user go on login  
            render json: @user 
        else 
            render json: ["Invalid email/password combination"], status: 401
        end 
    end 

    def destroy 
        @user = current_user 
        if @user
            logout!
            render "/"  # bring back to root
        else 
            render json: ["Not currently signed in"], status: 404
        end 
    end
end 