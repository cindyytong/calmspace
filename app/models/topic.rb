class Topic < ApplicationRecord 
    validates :title, presence: true, uniqueness: true 
    
    belongs_to :topicable, polymorphic: true 
    belongs_to :user  # does this put a null false constraint?
    belongs_to :therapist  # does this put a null false constraint? 

    has_many :topic_interests,
    class_name: :TopicJoin,
    foreign_key: :topic_id 
end 