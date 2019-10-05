class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save 
            login!(@user)
            render json: @user 
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    def show 
        @user = User.includes(:topics, :topic_interests).where(id: params[:id]).first 
        debugger
        render :show 
    end 

    def get_matches # returns therapist matches for user 
        # look at https://github.com/aliao3511/slacc/blob/master/app/controllers/api/users_controller.rb
        if params[:username]
            @user = User.where(username: username)
            render json: {}
        else
            render json: {}
        end
    end 

    private

    def user_params
      params.require(:user).permit(:username, :email, :password, :over_age_13)  
    end 
end 