class CreateTherapists < ActiveRecord::Migration[5.2]
  def change
    create_table :therapists do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "session_token", null: false
    t.text "body"
    t.string "degree"
    t.string "gender", null: false 
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_therapists_on_email", unique: true
    t.index ["session_token"], name: "index_therapists_on_session_token", unique: true
    t.index ["first_name", "last_name"], name: "index_therapist_on_first_and_last_name", unique: true 
    end
  end
end
