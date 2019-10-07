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
        render :show 
    end 

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end  
    end 

    def get_matches # returns therapist matches for user 
        if current_user        
            topic_ids = TopicInterest.where(:userable_id => current_user.id ).group(:topic_id).pluck(:topic_id)
            therapist_ids = TopicInterest.limit(3).where(topic_id: topic_ids).where(userable_type: "Therapist").group(:userable_id).pluck(:userable_id)
            @therapists = Therapist.includes(:topics).where(id: therapist_ids).to_a
            render :get_matches
        else
            render json: {}, status: 404
        end 
    end 

    private

    def user_params
      params.require(:user).permit(:id, :username, :email, :password, :over_age_13, :gender_pref, :current_therapist_id, :goals)  
    end 
end 