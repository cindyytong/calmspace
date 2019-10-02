class Therapist < ApplicationRecord
    validates :email, :password_digest, :first_name, :last_name, :session_token, :gender, presence: { message: 'must not be blank'} 
    validates :email, uniqueness: { message: 'already registered'}
    validates :first_name, uniqueness: { scope: :last_name } # test 
    validates :password, length: { minimum: 8, allow_nil: true, message: 'must be greater than 8 characters and contain no special characters' } 
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP, message: 'must be a valid email address'}
    validates_inclusion_of :gender, :in => %w( male female )

    after_initialize :ensure_session_token 


    ##### Associations 


    #### Authentication 
    attr_reader :password

    def self.find_by_credentials(email, password)
        therapist = Therapist.find_by(email: email)
        return nil unless therapist
        therapist.is_password?(password) ? therapist : nil
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