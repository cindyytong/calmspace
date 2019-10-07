class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :chat_room_id, null: false 
      t.integer :sender_id, null: false 
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index [:chat_room_id], name: "index_message_on_chat_room"
      t.index [:sender_id], name: "index_messsage_on_sender"
    end
  end
end
