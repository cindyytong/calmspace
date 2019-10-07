class ChatChannel < ApplicationCable::Channel
  def subscribed
    stream_for 'chat_channel'
  end

  # we can only broadcast objects 
  def speak(data)
    message = Message.create(body: data['message'])
    socket = { message: message.body }
    ChatChannel.broadcast_to('chat_channel', socket)
  end 

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
