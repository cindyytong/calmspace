class Member < ApplicationRecord 
    self.abstract_class = true
    
    validates :email, :password_digest, :session_token, presence: { message: 'must not be blank'}   
    validates :email, uniqueness: { message: 'already registered'}
    validates :password, length: { minimum: 8, allow_nil: true, message: 'must be greater than 8 characters' } 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'must be a valid email address'}
    after_initialize :ensure_session_token 

    attr_reader :password, :member_type

    def member_type  # returns membertype as a string i.e. User or Therapist
        @member_type = self.class.to_s  
    end 

    def self.find_by_credentials(email, password)
        member = self.find_by(email: email)
        return nil unless member
        member.is_password?(password) ? member : nil
      end
    

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end 


    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        self.session_token
    end 
    
    private 
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end 
end 