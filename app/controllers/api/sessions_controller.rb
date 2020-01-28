class Api::SessionsController < ApplicationController 
    def create
        memberType = params[:type].titleize.constantize
        debugger
        @user = memberType.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user && params[:type] == 'user'
            login!(@user)
            render "api/users/show" 
        elsif @user && params[:type] == 'therapist'
            login!(@user)
            render "api/therapists/show"    
        else  
            render json: ["Invalid email/password combination"], status: 401
        end 
    end 

    def destroy
        if current_user
            logout!
            render json: {}  
        else 
            render json: ["Not currently signed in"], status: 404
        end 
    end
end 