

json.extract! therapist, :id, :username, :first_name, :last_name, :body, :degree, :gender, :img_url
json.memberType @user.member_type
json.topics @user.topics.map{|topic| topic.title }