class CreateChatRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :chat_rooms do |t|
      t.integer :user_id, null: false, unique: true 
      t.integer :therapist_id, null: false
      t.integer :note_id, null: false, unique: true 
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index [:user_id], name: "index_chat_room_on_user"
      t.index [:therapist_id], name: "index_chat_room_on_therapist"
      t.index [:user_id, :therapist_id], name: "index_chat_room_on_user_and_therapist"
    end
  end
end
