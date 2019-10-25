
json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals, :created_at
json.memberType user.member_type
json.topics user.topics.map{|topic| topic.title }
