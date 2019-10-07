class Message < ApplicationRecord
validates :body, presence: true, length: { minimum: 1 }
validates :messageable_type, inclusion: { in: ["User", "Therapist"] }

belongs_to :chat_room,
foreign_key: :chat_room_id,
class_name: :ChatRoom 

belongs_to :messageable, polymorphic: true 

end
