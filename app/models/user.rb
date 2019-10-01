class User < ApplicationRecord 
    validates :email, :password_digest, :username, :session_token, :over_age_13, presence: { message: 'must not be blank'} # how do I access this? 
    validates :email, :username, uniqueness: { message: 'already registered'}
    validates :password, length: { minimum: 8, allow_nil: true, message: 'must be greater than 8 characters and contain no special characters' } 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'must be a valid email address'}

    after_initialize :ensure_session_token 

#     SPECIAL_CHARS = [ "!", 
#     "#", 
#     "$", 
#     "%", 
#     "&", 
#     "\"", 
#     "\'", 
#     "(", 
#     ")", 
#     "*", 
#     "+", 
#     ",", 
#     "-"
#     ".",
#     "/",
#     ":",
#     ";",
#     "<", 
#     "=", 
#     ">",
#     "?",
#     "@",
#     "[",
#     "\\",
#     "]",
#     "^",
#     "_",
#     "`",
#     "{",
#     "|",
#     "}",
#     "~"
# ]

    GENDERS = ['m', 'female', 'none']

    ##### Associations 

    # belongs_to :chatroom,
    # foreign_key: :chatroom_id,
    # class_name: :Chatroom  

    # belongs_to :therapist,
    # foreign_key: :current_therapist_id,
    # class_name: :Therapist 

    #### Authentication 
    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return nil unless user
        user.is_password?(password) ? user : nil
      end
    

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 

    private 
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end 
end 