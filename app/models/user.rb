class User < Member 
    validates :username, :over_age_13, presence: { message: 'must not be blank'} # how do I access this? 
    validates :username, uniqueness: { message: 'already registered'}
    validates_inclusion_of :gender_pref, :in => %w( male female none)


    ##### Associations 
    belongs_to :therapist, optional: true,
    class_name: :Therapist,
    foreign_key: :current_therapist_id 

    has_many :topic_interests, :as => :userable,
    class_name: :TopicInterest,
    dependent: :destroy

    has_many :topics,
    through: :topic_interests,
    source: :topic

    has_many :messages, :as => :messageable,
    class_name: :Message,
    dependent: :destroy 

    # check impact of changing this to many relation
    has_one :chat_rooms,
    foreign_key: :user_id,
    class_name: :ChatRoom,
    dependent: :destroy  

    has_one_attached :profile_photo
end 