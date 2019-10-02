class User < Member 
    validates :username, :over_age_13, presence: { message: 'must not be blank'} # how do I access this? 
    validates :username, uniqueness: { message: 'already registered'}
    validates_inclusion_of :gender_pref, :in => %w( male female none)


    ##### Associations 

    # belongs_to :chatroom,
    # foreign_key: :chatroom_id,
    # class_name: :Chatroom  

    # belongs_to :therapist,
    # foreign_key: :current_therapist_id,
    # class_name: :Therapist 

end 