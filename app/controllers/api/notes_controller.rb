class Api::NotesController < ApplicationController 

def index 
    if(params[:chat_room_id])
        @not
    else
    end 
end 

def show 
end 

def create 
end 

def update
end 

def note_params 
    params.require(:note).permit(:chat_room_id)
end 
end 
