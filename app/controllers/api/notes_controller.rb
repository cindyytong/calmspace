class Api::NotesController < ApplicationController 

def show 
    @note = Note.find(params[:id])
    if @note 
        render :show 
    else 
        render json: ["Note note found for this chatroom"], status: 404
    end 
end 

def create 
    @note = Note.new(note_params)
    if @note.save 
        render :show 
    else
        render json: @note.errors.full_messages 
    end 
end 

def update

    @note = Note.find(params[:id])
    if @note.update(note_params)
        render :show 
    else
        render json @note.errors.full_message 
    end 
end 

def note_params 
    params.require(:note).permit(:chat_room_id, :therapist_id, :body)
end 
end 
