class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat_channel = ChatRoom.find(params[:id])
    stream_for @chat_channel
  end

  # we can only broadcast objects, hence we make the socket 
  def speak(data)
    message = Message.new(body: data['message'])
    # message = @chat_channel.messages.new(body: data['message'])
    message.chat_room_id = @chat_channel.id 
    if current_user.member_type == 'User' 
      message.messageable_type = 'User'
    elsif current_user.member_type == 'Therapist'
      message.messageable_type = 'Therapist'
    end 
    message.messageable_id = current_user.id 

    if message.save! 
      # socket = { message: message.body }
      socket = { message: message.to_json }
      ChatChannel.broadcast_to('chat_channel', socket)
    end 
  end 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
