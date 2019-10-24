if current_user.member_type == 'User'
    json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals
    json.memberType user.member_type
else 
    json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals
    json.memberType user.member_type
end 