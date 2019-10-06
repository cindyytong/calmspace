class Api::TopicInterestsController < ApplicationController

    def create
        @topic_interest = TopicInterest.new(topic_interest_params)
        if @topic_interest.save 
            render :show 
        else
            render json: @topic_interest.errors.full_messages, status: 422 
        end 
    end 

    private 
    def topic_interest_params 
        params.fetch(:topic_interest, {}).permit(:userable_id, :topic_id, :userable_type)
    end 
end 