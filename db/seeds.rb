# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

################# TOPICS #################

#### Topics 
topics_arr = [
    'ADHD',
    'Anger Management',
    'Anxiety',
    'Behavioral Issues',
    'Career Counseling',
    'Child or Adolescent',
    'Coping Skills',
    'Codependency',
    'Cognitive Behavioral',
    'Divorce',
    'Depression',
    'Family Conflict',
    'Life Coaching',
    'Life Transition',
    'Learning Disability',
    'Positive Psychology',
    'Pregnancy Postpartem',
    'Relationship Issues',
    'Self Esteem',
    'Stress'
]

topics_arr.each {|topic| Topic.create( {title: topic } )}


################# USERS ###################
# no gender pref 
demo_patient = User.create!({ email: 'user1@calmspace.com', username: 'demo patient', over_age_13: true, password: '12345678', gender_pref: 'none' })
# female pref 
demo_patient_female = User.create!({ email: 'user2@calmspace.com', username: 'demo patient 2', over_age_13: true, password: '12345678', gender_pref: 'female' })
#male pref 
demo_patient_male = User.create!({ email: 'user3@calmspace.com', username: 'demo patient 3', over_age_13: true, password: '12345678', gender_pref: 'male' })


################# THERAPISTS ###################

# female therapists 
therapist1 = Therapist.create!({ email: 'therapist1@calmspace.com', password: '12345678', first_name: 'Sarah', last_name: 'Lee', gender: 'female' })

therapist2 = Therapist.create!({ email: 'therapist2@calmspace.com', password: '12345678', first_name: 'Rebecca', last_name: 'Yel', gender: 'female' })
therapist3 = Therapist.create!({ email: 'therapist3@calmspace.com', password: '12345678', first_name: 'Chloe', last_name: 'Finn', gender: 'female' })

# male therapists 
therapist4 = Therapist.create!({ email: 'therapist4@calmspace.com', password: '12345678', first_name: 'Jason', last_name: 'Ryder', gender: 'male' })

therapist5 = Therapist.create!({ email: 'therapist5@calmspace.com', password: '12345678', first_name: 'Michael', last_name: 'Bolt', gender: 'male' })
therapist6 = Therapist.create!({ email: 'therapist6@calmspace.com', password: '12345678', first_name: 'Andrew', last_name: 'Garvy', gender: 'male' })

################ TOPIC_INTERESTS JOINS ###############
# All topics: therapist1 & therapist4 
Topic.all.each{|topic| TopicInterest.create!( { userable_id: therapist1.id, topic_id: topic.id, userable_type: "Therapist"} )}

Topic.all.each{|topic| TopicInterest.create!( { userable_id: therapist4.id, topic_id: topic.id, userable_type: "Therapist"} )}

# topics_arr[0..10]
# therapist 2 & 5

therapist2_id = Therapist.where(first_name: "Rebecca")[0].id
therapist5_id = Therapist.where(first_name: "Michael")[0].id

(0..10).each do |n| 
    TopicInterest.create!( { userable_id: therapist2_id, topic_id: (Topic.where(title: topics_arr[n])[0].id), userable_type: "Therapist"} )
end 

(0..10).each do |n| 
    TopicInterest.create!( { userable_id: therapist5_id, topic_id: (Topic.where(title: topics_arr[n])[0].id), userable_type: "Therapist"} )
end 


# topics_arr[11...20]
therapist3_id = Therapist.where(first_name: "Chloe")[0].id
therapist6_id = Therapist.where(first_name: "Andrew")[0].id

(10..20).each do |n| 
    TopicInterest.create!( { userable_id: therapist3_id, topic_id: (Topic.where(title: topics_arr[n])[0].id), userable_type: "Therapist"} )
end 

(10..20).each do |n| 
    TopicInterest.create!( { userable_id: therapist6_id, topic_id: (Topic.where(title: topics_arr[n])[0].id), userable_type: "Therapist"} )
end 

# Patients 

demo_patient_id = User.where(email: 'user1@calmspace.com')[0].id
demo_patient_female_id = User.where(email: 'user2@calmspace.com')[0].id
demo_patient_male_id = User.where(email: 'user3@calmspace.com')[0].id

demo_patient_topic_id = [1, 12]

demo_patient_topic_id.each do |topic_id| 
    TopicInterest.create!( { userable_id: demo_patient_id, topic_id: (Topic.where(title: topics_arr[topic_id])[0].id), userable_type: "User"} )
end 

demo_patient_female_topic_id = [2, 18, 19]

demo_patient_female_topic_id.each do |topic_id| 
    TopicInterest.create!( { userable_id: demo_patient_female_id, topic_id: (Topic.where(title: topics_arr[topic_id])[0].id), userable_type: "User"} )
end 

demo_patient_male_topic_id = [1, 2]

demo_patient_male_topic_id.each do |topic_id| 
    TopicInterest.create!( { userable_id: demo_patient_male_id, topic_id: (Topic.where(title: topics_arr[topic_id])[0].id), userable_type: "User"} )
end 

############## Matching queries ###########

# 1. find patient id by email 
# 2. get patient user_gender_pref 
# 3. get therapist matching user_gender_pref (3 - 6)
# 4. From the therapist matching gender pref find therapist matching topics 

def get_gender_match(email)
    user_gender_pref = User.where(email: email)[0].gender_pref
    if user_gender_pref == 'none'
        return Therapist.all.to_a 
    else 
        return Therapist.where(gender: user_gender_pref).to_a
    end 
end 

get_gender_match("user1@calmspace.com").length # returns 6 
get_gender_match("user2@calmspace.com").length # returns 3
get_gender_match("user3@calmspace.com").length # returns 3

# topic_arr = User.where(email: "user1@calmspace.com")[0].topics.to_a
gender_matches = get_gender_match("user1@calmspace.com").to_a  # array of all therapist matches 
gender_matches[0].topics.to_a.length # first therapist 
def get_topic_match(gender_matches, email)
    # get topics interest from user 
    user_topics = User.where(email: email)[0].topics.to_a
    # save topic titles in array 
    topic_names = user_topics.map{|topic| topic.title}
    # for each therapist match 
    gender_matches.each do |therapist|
        therapist_topics = Therapist.where(email: therapist.email)[0].topics.to_a.length 
    end 
end 



#### 
# 1. topic_interests for a user on SQL returns topic_ids 
# SELECT * FROM topic_interests WHERE userable_id = 5 AND userable_type = 'User';

# 2. find topic joins list of therapist with any match to topic ids 
#  SELECT * FROM topic_interests WHERE userable_type = 'Therapist' AND topic_id IN (6, 17);


SELECT *  
FROM topic_interests 
WHERE userable_type = 'Therapist' 
AND topic_id IN (6, 17); 

SELECT DISTINCT  # gives list of therapist_id with any matching topic 
userable_id,
COUNT * 
FROM topic_interests 
WHERE userable_type = 'Therapist' 
AND topic_id IN (6, 17)
