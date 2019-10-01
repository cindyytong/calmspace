class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string "email", null: false 
      t.string "password_digest", null: false 
      t.string "username", null: false 
      t.boolean "over_age_13", null: false  
      t.string "session_token", null: false 
      t.string "gender_pref", default: 'none' # how do I defined must exist in list? 
      t.integer "current_therapist_id"
      t.integer "chatroom_id" # does this need to be here? 
      t.datetime "created_at", null: false 
      t.datetime "updated_at", null: false 
      t.index ["email"], name: "index_users_on_email", unique: true 
      t.index ["username"], name: "index_users_on_username", unique: true 
      t.index ["session_token"], name: "index_users_on_session_token", unique: true 
    end
  end
end

