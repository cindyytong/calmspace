class User < Member 
    validates :username, :over_age_13, presence: { message: 'must not be blank'} # how do I access this? 
    validates :username, uniqueness: { message: 'already registered'}
    validates_inclusion_of :gender_pref, :in => %w( male female none)


    ##### Associations 
    has_many :topic_interests, :as => :userable,
    class_name: :TopicInterest

    has_many :topics,
    through: :topic_interests,
    source: :topic

end 