# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

################# USERS ###################
demo_patient = User.create({ email: 'user1@calmspace.com', username: 'demo patient', over_age_13: true, password: '12345678', gender_pref: 'none' })
patient2 = User.create({ email: 'user2@calmspace.com', username: 'user2', over_age_13: true, password: '12345678' })

# gender pref 
patient3 = User.create({ email: 'user4@calmspace.com', username: 'user4', over_age_13: true, password: '12345678', gender_pref: 'male' })
patient4 = User.create({ email: 'user5@calmspace.com', username: 'user5', over_age_13: true, password: '12345678', gender_pref: 'female' })

# Failures: 
# under age 13 
user3 = User.create({ email: 'user3@calmspace.com', username: 'user1', over_age_13: false, password: '12345678' })
# incorrect gender pref
user6 = User.create({ email: 'user3@calmspace.com', username: 'user1', over_age_13: false, password: '12345678', gender_pref: 'notreal' })


################# THERAPISTS ###################
therapist1 = Therapist.create({ email: 'therapist1@calmspace.com', password: '12345678', first_name: 'Sarah', last_name: 'Lee', gender: 'female' })
therapist2 = Therapist.create({ email: 'therapist2@calmspace.com', password: '12345678', first_name: 'Rebecca', last_name: 'Yel', gender: 'female' })
therapist3 = Therapist.create({ email: 'therapist3@calmspace.com', password: '12345678', first_name: 'Chloe', last_name: 'Finn', gender: 'female' })
therapist4 = Therapist.create({ email: 'therapist4@calmspace.com', password: '12345678', first_name: 'Jason', last_name: 'Ryder', gender: 'male' })
therapist5 = Therapist.create({ email: 'therapist5@calmspace.com', password: '12345678', first_name: 'Michael', last_name: 'Bolt', gender: 'male' })
therapist6 = Therapist.create({ email: 'therapist6@calmspace.com', password: '12345678', first_name: 'Andrew', last_name: 'Garvy', gender: 'male' })


#### Topics 
TOPICS = [
    'ADHD',
    'Anger Management'
    'Anxiety',
    'Behavioral Issues'
    'Career Counseling',
    'Child or Adolescent'
    'Coping Skills',
    'Codependency'
    'Cognitive Behavioral'
    'Divorce'
    'Depression',
    'Family Conflict',
    'Life Coaching',
    'Life Transition'
    'Learning Disability'
    'Positive Psychology',
    'Pregnancy, Prenatlal, Postpartem'
    'Relationship Issues'
    'Self Esteem'
    'Stress'
]

