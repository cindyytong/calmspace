debugger
@therapists.each do |therapist|
  json.set! therapist.id do
    json.partial! 'therapist', therapist: therapist
  end
end

