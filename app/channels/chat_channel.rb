class ChatChannel < ApplicationCable::Channel
  def subscribed
    @chat_channel = ChatRoom.find(params[:id])
    # params obj is first argument to create method in consumer.subscriptions
    stream_for @chat_channel
  end

  # we can only broadcast objects, hence we make the socket 
  def speak(data)
    debugger
    message = Message.new(data['message'])
    # message = @chat_channel.messages.new(body: data['message'])
    message.chat_room_id = @chat_channel.id 
    # message.messageable_type = current_user.member_type
    # message.messageable_id = current_user.id 

    if message.save! 
      # socket = { message: message.body }
      socket = { message: message.to_json }
      # first argument is what we are broadcast to should match to what you are subscribed to
      ChatChannel.broadcast_to(@chat_channel, socket)
    end 
  end 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
