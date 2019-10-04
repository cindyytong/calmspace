class TopicInterest < ApplicationRecord
    validates :userable_type, inclusion: { in: ["User", "Therapist"] }
    
    belongs_to :userable, polymorphic: true 
    
    belongs_to :topic
    
end 