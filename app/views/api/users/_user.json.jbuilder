if current_user.member_type == 'User'
    json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals
    json.memberType user.member_type
    json.topics user.topics.map{|topic| topic.title }
else 
    json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals
    json.memberType user.member_type
    json.topics user.topics.map{|topic| topic.title }
end 