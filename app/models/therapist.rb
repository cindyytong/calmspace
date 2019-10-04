class Therapist < Member
    validates :first_name, :last_name, :gender, presence: { message: 'must not be blank'} 
    validates :first_name, uniqueness: { scope: :last_name } # test 
    validates_inclusion_of :gender, :in => %w( male female )

    ##### Associations 

    has_many :topic_interests, :as => :userable,
    class_name: :TopicInterest

    has_many :topics,
    through: :topic_interests,
    source: :topic

end 