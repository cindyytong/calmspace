class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save 
            login!(@user)
            # render json: @user 
            render "api/users/show" 
        else 
            render json: @user.errors.full_messages, status: 422
        end 
    end 

    def show 
        @user = User.includes(:topics, :topic_interests).where(id: params[:id]).first 
        # render :show 
        render "api/users/show" 
    end 

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            # render :show
            render "api/users/show"  
        else
            render json: @user.errors.full_messages, status: 422
        end  
    end 

    def get_matches # returns therapist matches for user 
        if current_user    
            id = current_user.id
            user_topics =  TopicInterest.where(:userable_id => id )  
            # no topic or gender selected, return first 3 therapists 
            debugger
            if user_topics[0].nil? && current_user.gender_pref == "none" 
                @therapists = Therapist.includes(:topics).first(3).to_a
            debugger
            # no topic only, return therapist with gender
            elsif user_topics[0].nil? && current_user.gender_pref != "none"
              
                @therapists = Therapist.includes(:topics).limit(3).where(:gender => current_user.gender_pref).to_a
            debugger
            # topics selected, return therapist with topics regardless of gender
            else 
            debugger
                topic_ids = user_topics.group(:topic_id).pluck(:topic_id)
                therapist_ids = TopicInterest.limit(3).where(topic_id: topic_ids).where(userable_type: "Therapist").group(:userable_id).pluck(:userable_id)
                @therapists = Therapist.includes(:topics).where(id: therapist_ids).to_a
            end 
            render "api/users/get_matches" 
        else
            render json: {}, status: 404
        end 
    end 


    # topic_ids = TopicInterest.where(:userable_id => 174 ).group(:topic_id).pluck(:topic_id)

    # therapist_ids = TopicInterest.limit(3).where(topic_id: topic_ids).where(userable_type: "Therapist").group(:userable_id).pluck(:userable_id)
    
    private

    def user_params
      params.require(:user).permit(:username, :email, :password, :over_age_13, :gender_pref, :current_therapist_id, :goals)  
    end 
end 