class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat_channel = ChatRoom.find(params[:id])
    stream_for @chat_channel
  end
 
  def speak(data)
    message = Message.new(data['message'])    
    if message.save! 
      # socket = { message: message.to_json, type: 'message' }
      socket = { message: message, type: 'message' }
      ChatChannel.broadcast_to(@chat_channel, socket)
    end 
  end 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
