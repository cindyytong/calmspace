class Api::TherapistsController < ApplicationController
    def show 
        @therapist = Therapist.includes(:topics).where(id: params[:id]).first 
    
        if @therapist 
            render :show 
        else
            render json: @therapist.errors.full_messages, status: 404
        end 
    end 
end 