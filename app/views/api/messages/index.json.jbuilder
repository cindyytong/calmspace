debugger
@messages.each do |message| 
 json.set! message.id do
 debugger
    json.partial! 'message', message: message
  end
end 