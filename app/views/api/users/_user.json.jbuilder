if current_user.member_type == 'User'
    json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals, :therapist
else 
    json.extract! user, :id, :username, :gender_pref, :current_therapist_id, :email, :gender_pref, :goals, :patients
end 