class ChatRoom < ApplicationRecord 
    validates :user_id, null: false, uniqueness: { scope: :therapist_id,
message: "each user can only chat with one therapist at a time"} 
    # validates :note_id, uniqueness: true, allow_nil: true 

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User 

    belongs_to :therapist,
    foreign_key: :therapist_id,
    class_name: :Therapist  

    has_many :messages,
    foreign_key: :chat_room_id,
    class_name: :Message,
    dependent: :destroy 
    
    has_one :note,
    foreign_key: :chat_room_id,
    class_name: :Note,
    dependent: :destroy 
end 