if current_user.member_type == 'User'
debugger
    json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals, :therapist
    json.memberType user.member_type
else 
    json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals, :patients
    json.memberType user.member_type
end 