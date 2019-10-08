
@therapists.each do |therapist|
  json.set! therapist.id do
    json.extract! therapist, :id, :first_name, :last_name, :username, :body, :degree, :img_url, :email, :topics, :topic_interests
  end
end

