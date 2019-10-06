class Api::TherapistsController < ApplicationController
    def show 
        @therapist = Therapist.includes(:topics, :topic_interests).where(id: params[:id]).first 
        if @therapist 
            render json: @therapist
        else
            render json: @therapist.errors.full_messages, status: 404
        end 
    end 
end 