class Api::TopicInterestsController < ApplicationController
    def create
        debugger
        @topic_interest = TopicInterest.new(userable_id: params[:userable_id], topic_id: params[:topic_id], userable_type: params[:userable_type])
        if @topic_interest.save 
            render json: @topic_interest
        else
            render json: @topic_interest.errors.full_messages, status: 422 
        end 
    end 

    def show
        @topic_interest = TopicInterest.find(params[:id])
        render json: @topic_interest 
    end 

    def topic_interest_params 
        params.require(:topic_interest).permit(:userable_id, :topic_id, :userable_type)
    end 
end 
