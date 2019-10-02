class Therapist < Member
    validates :first_name, :last_name, :gender, presence: { message: 'must not be blank'} 
    validates :first_name, uniqueness: { scope: :last_name } # test 
    validates_inclusion_of :gender, :in => %w( male female )


    ##### Associations 


end 