class Api::TopicInterestsController < ApplicationController
    def create
        @topic_interest = TopicInterest.new(params)
        if @topic_interest.save 
            render :show 
        else
            render json: @topic_interest.errors.full_messages, status: 422 
        end 
    end 

    def show
        @topic_interest = TopicInterest.find(params[:id])
        render :show  
    end 

    # def topic_interest_params 
    #     params.require(:topic_interest).permit(:userable_id, :topic_id, :userable_type)
    # end 
end 

#  makes a new topic 
# TopicInterest.new(userable_id: 62 , topic_id: 24, userable_type: 'User')