
json.extract! therapist, :id, :first_name, :last_name, :body, :degree, :gender, :img_url
json.topics therapist.topics.map{|topic| topic.title }