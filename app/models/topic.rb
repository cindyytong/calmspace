class Topic < ApplicationRecord 
    validates :title, presence: true, uniqueness: true 

    has_many :topic_interests

    has_many :users,
    through: :topic_interests,
    source: :userable,
    source_type: 'User'
   
    # has_many :users  # does this put a null false constraint?
    # has_many :therapists  # does this put a null false constraint? 

    
   
end 