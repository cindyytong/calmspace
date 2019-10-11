# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

##### DESTROY PREVIOUS ENTRIES ######
User.all.destroy_all
Therapist.all.destroy_all
Topic.all.destroy_all
TopicInterest.all.destroy_all
ChatRoom.all.destroy_all
Message.all.destroy_all
Note.all.destroy_all
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

################# THERAPISTS ###################

# female therapists 
therapist1 = Therapist.create!({ email: 'therapist1@calmspace.com', password: '12345678', username: 'therapist1', first_name: 'Sarah', last_name: 'Lee', gender: 'female', degree: 'LCSW', body: "If you are reading this, you have taken a courageous first step toward growth, change and improving your quality of life. In my view, life's fabric is made up of relationships to self, symptoms, significant others, life experiences, the world in which we live, religion or spirituality, money, our life's work...My life's work is psychotherapy, and I love my work. In my view of this process, issues and problems in these relationships are worked through. Via the therapeutic relationship, symptoms and their underpinnings are addressed with the goal of living a richer, fuller life.", img_url: 'therapist1URL' })

therapist2 = Therapist.create!({ email: 'therapist2@calmspace.com', password: '12345678', username: 'therapist2', first_name: 'Rebecca', last_name: 'Yel', gender: 'female', degree: 'Psychologist', body: 'A 20 year yoga practice, post-graduate training from Columbia Psychoanalytic and the White Institute, and a background in filmmaking shape my narrative, collaborative, insight full approach. I believe symptoms speak for us when our mind and body feel disconnected, so I pay careful attention to this alternative communication. We live in a world in which technology mediates so much of what we do and how we make contact with each other. I believe in the power of face to face connection and careful listening. Suffering can be alleviated and hope nurtured as we live through experiences differently, accompanied, bearing witness, instead of feeling all alone.', img_url:'therapist2URL' })

therapist3 = Therapist.create!({ email: 'therapist3@calmspace.com', password: '12345678', username: 'therapist3', first_name: 'Chloe', last_name: 'Finn', gender: 'female', degree: 'Clinical Social Work/Therapist,', body: "I am an experienced psychotherapist working with adult and older adolescent individuals, straight & gay couples, and groups. I have extensive experience in working with all addictions, trauma, (EMDRIA Approved Consultant and Somatic Experiencing Practitioner), depression/anxiety, panic disorders and grieving, amongst others. I incorporate meditation & mindfulness practices into work with my patients when desired.
I take an eclectic approach to designing treatment plans, using psychodynamic, cognitive-behavioral (CBT), Eye Movement Desensitization Reprocessing (EMDR) & Somatic Experiencing (Certified SEP) for trauma healing, Imago (with couples), & Buddhist mindfulness/meditation, in addition to others.", img_url: 'therapist3URL' })

# male therapists 
therapist4 = Therapist.create!({ email: 'therapist4@calmspace.com', username: 'therapist4', password: '12345678', first_name: 'Jason', last_name: 'Ryder', gender: 'male', degree: 'Therapist/ LCSW', body: "The common thread of life is humanity because we face similar everyday problems. Our daily lives are oversaturated, which then cause us to become overwhelmed, anxious, depressed, or lonely. There appears to be less time spent with family, friends, and doing activities & more time working and getting by each day. Having a therapist who is compassionate, authentic, and willing to listen is the first step to coping & processing everyday problems. Engaging in therapy will teach you about your innate strengths. Therapy is about discovery and possibility!", img_url: 'therapist4URL' })

therapist5 = Therapist.create!({ email: 'therapist5@calmspace.com', password: '12345678', username: 'therapist5', first_name: 'Michael', last_name: 'Bolt', gender: 'male', degree: 'Counselor, LMHC', body: "Do you want help leading a healthier and happier life? I am dedicated to helping people develop a healthy sense of self by creating a non-judgmental and affirming environment where healing is created collaboratively. I work with individuals of all ages, supporting them in coping with anxiety, depression, and other life stressors. I have extensive experience working with fatherhood and parenting difficulties, anger management issues, and PTSD. I also specialize in working with individuals experiencing bullying or struggles with cultural identity.
My approach to therapy employs a psychodynamic background that is compassionate and supportive. I also incorporate practical methods such as cognitive behavioral, dialectical behavioral therapy and motivational interviewing techniques help clients make real and long lasting change.", img_url: 'therapist5URL' })

therapist6 = Therapist.create!({ email: 'therapist6@calmspace.com', password: '12345678', username: 'therapist6', first_name: 'Andrew', last_name: 'Garvy', gender: 'male', degree: 'Psychologist', body: "Psychotherapy lets people be their most 'authentic' selves and live at their highest potential; it also helps them understand barriers to optimal living. Expecting that you have all the answers is not realistic, and entering therapy is a helpful step to deepening understanding, resolving problematic relational patterns and simply making changes. Also,Therapy need not be a 'lifelong process'. I have a proven track record working with people achieving results. My treatment approach combines a Relational psychodynamic frame with goal-focused techniques. I tend to work very interactively with clients relationally, while also allowing abundant space for clients their own insights and self-reflection.
I have expertise in Relationship issues, working with Sexuality and Gender Identity(Transgender) , Stress/anxiety and depressive disorders, Addictions, and 'Life Transitions' and challenges. LGBTQ focused. I also see couples, and run psychotherapy groups.", img_url: 'therapist6URL'})

################# USERS ###################
# no gender pref 
demo_patient = User.create!({ email: 'user1@calmspace.com', username: 'demo patient', over_age_13: true, password: '12345678', gender_pref: 'none', goals: 'I have been feeling stressted at work and want to change my career but I do not know where to begin.', current_therapist_id: therapist1.id })
# female pref 
demo_patient_female = User.create!({ email: 'user2@calmspace.com', username: 'demo patient 2', over_age_13: true, password: '12345678', gender_pref: 'female', goals: 'I want to have a child but my husband does not want. We love each other very much but we have such different goals.', current_therapist_id: therapist1.id })
#male pref 
demo_patient_male = User.create!({ email: 'user3@calmspace.com', username: 'demo patient 3', over_age_13: true, password: '12345678', gender_pref: 'male', goals: 'I just lost my father and I am having a hard time dealing with him being gone.', current_therapist_id: therapist2.id })


################ TOPIC_INTERESTS JOINS ###############
# All topics: therapist1 & therapist4 

Topic.all.each{|topic| TopicInterest.create!( { userable_id: therapist1.id, topic_id: topic.id, userable_type: "Therapist"} )}

Topic.all.each{|topic| TopicInterest.create!( { userable_id: therapist4.id, topic_id: topic.id, userable_type: "Therapist"} )}

# topics_arr[0..10]
# therapist 2 & 5

(0..10).each do |n| 
    TopicInterest.create!( { userable_id: therapist2.id, topic_id: (Topic.where(title: topics_arr[n]))[0].id, userable_type: "Therapist"} )
end 

(0..10).each do |n| 
    TopicInterest.create!( { userable_id: therapist5.id, topic_id: (Topic.where(title: topics_arr[n]))[0].id, userable_type: "Therapist"} )
end 


# topics_arr[11...20]

(10..19).each do |n| 
    TopicInterest.create!( { userable_id: therapist3.id, topic_id: (Topic.where(title: topics_arr[n]))[0].id, userable_type: "Therapist"} )
end 

(10..19).each do |n| 
    TopicInterest.create!( { userable_id: therapist6.id, topic_id: (Topic.where(title: topics_arr[n]))[0].id, userable_type: "Therapist"} )
end 

# Patients 

demo_patient_topic_id = [1, 12]

demo_patient_topic_id.each do |topic_id| 
    TopicInterest.create!( userable_id: demo_patient.id, topic_id: (Topic.where(title: topics_arr[topic_id]))[0].id, userable_type: "User" )
end 

demo_patient_female_topic_id = [2, 18, 19]

demo_patient_female_topic_id.each do |topic_id| 
    TopicInterest.create!( { userable_id: demo_patient_female.id, topic_id: (Topic.where(title: topics_arr[topic_id]))[0].id, userable_type: "User"} )
end 

demo_patient_male_topic_id = [1, 2]

demo_patient_male_topic_id.each do |topic_id| 
    TopicInterest.create!( { userable_id: demo_patient_male.id, topic_id: (Topic.where(title: topics_arr[topic_id]))[0].id, userable_type: "User"} )
end 


############### TESTING CHATROOMS & MESSAGES ############
# user_id = 142
# therapist_id = 19 

chatroom_1 = ChatRoom.create!(user_id: demo_patient.id, therapist_id: therapist1.id)
chatroom_2 = ChatRoom.create!(user_id: demo_patient_female.id, therapist_id: therapist1.id)
chatroom_3 = ChatRoom.create!(user_id: demo_patient_male.id, therapist_id: therapist2.id)
# chatroom_1 = ChatRoom.create!(user_id: 11, therapist_id: 19)
# message1 = Message.create!(body: "User test message", chat_room_id: chatroom_1.id, messageable_id: demo_patient_id, messageable_type: "User")
# message1 = Message.create!(body: "Therapist test message", chat_room_id: chatroom_1.id, messageable_id: therapist1.id, messageable_type: "Therapist")

note_1 = Note.create!(chat_room_id: chatroom_1.id, body: "this is a new note for chatroom 1")
note_2 = Note.create!(chat_room_id: chatroom_2.id, body: "this is a new note for chatroom 2")

# chatroom_2 = ChatRoom.create!(user_id: 12, therapist_id: 19)
# note_2 = Note.create!(chat_room_id: chatroom_2.id, body: "this is a new note for chatroom1")

#### 
# 1. get topic interest for user with userable_id
# SELECT * 
# FROM topic_interests 
# WHERE userable_type = 'User'
# AND userable_id = 5; 
# # 2. get the topic ids for the topics the user wants 
# SELECT DISTINCT topic_id 
# FROM topic_interests 
# WHERE userable_type = 'User'
# AND userable_id = 5; 

# # 3. get therapist ids who match any topic 
# SELECT DISTINCT userable_id 
# FROM topic_interests 
# WHERE userable_type = 'Therapist'
# AND topic_id IN (
#     SELECT DISTINCT topic_id 
#     FROM topic_interests 
#     WHERE userable_type = 'User'
#     AND userable_id = 5 
# );

# # 4. order by therapist who match the most topics; limit top 3  
# SELECT userable_id, COUNT (*) 
# FROM topic_interests 
# WHERE userable_type = 'Therapist'
# AND topic_id IN (
#     SELECT DISTINCT topic_id 
#     FROM topic_interests 
#     WHERE userable_type = 'User'
#     AND userable_id = 5 
# )
# GROUP BY userable_id
# ORDER BY COUNT(*) DESC
# LIMIT 3;

# TopicInterest.select(:topic_id).where(:userable_id => 5, :userable_type => "User").to_a

# # rewrite using activeRecord 


# # therapist_ids = <<-SQL
# #     SELECT userable_id, COUNT (*) 
#     FROM topic_interests 
#     WHERE userable_type = 'Therapist'
#     AND topic_id IN (
#         SELECT DISTINCT topic_id 
#         FROM topic_interests 
#         WHERE userable_type = 'User'
#         AND userable_id = 5 
#     )
#     GROUP BY userable_id
#     ORDER BY COUNT(*) DESC
#     LIMIT 3;
# SQL 

# therapist_array = ActiveRecord::Base.connection.execute(sql)