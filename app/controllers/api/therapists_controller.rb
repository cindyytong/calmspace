class Api::TherapistsController < ApplicationController
    def show 
        @therapist = Therapist.includes(:topics, :patients).where(id: params[:id]).first 
        if @therapist 
            render "api/therapists/find" 
        else
            render json: @therapist.errors.full_messages, status: 404
        end 
    end
    
    
end 