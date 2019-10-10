class Note < ApplicationRecord
    belongs_to :chat_room,
    foreign_key: :chat_room_id,
    class_name: :ChatRoom

    has_one :therapist, :through => :chat_room, :source => :therapist 

end 