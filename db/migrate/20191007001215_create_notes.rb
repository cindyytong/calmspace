class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.integer :chat_room_id, null: false, unique: true 
      t.text :body
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
