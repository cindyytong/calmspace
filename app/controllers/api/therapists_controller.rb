class TherapistsController < ApplicationController
    def show 
        @therapist = Therapist.find(params[:id])
        if @therapist 
            render json: @therapist
        else
            render json: @therapist.errors.full_messages, status: 404
        end 
    end 

    def index
        @therapists =  Therapist.all 
        # find therapist for specific user 
        # @chirps = if params[:user_id]
        #     Chirp.where(author_id: params[:user_id])
        #   else
        #     Chirp.all
        #   end
    end 

end 