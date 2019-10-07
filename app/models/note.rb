class Note < ApplicationRecord
    belongs_to :chat_room,
    foreign_key: :chat_room_id,
    class_name: :ChatRoom

end 