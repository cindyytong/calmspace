class Api::TopicsController < ApplicationController
    # before_action :require_logged_in

    def index 
        @topics = Topic.all
        render :index 
    end

    def show 
        @topic = Topic.find(params[:id])
        render :show 
    end 
end 
