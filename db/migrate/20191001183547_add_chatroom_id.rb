class AddChatroomId < ActiveRecord::Migration[5.2]
  def change
    add_index :users, :chatroom_id, name: "index_users_on_chatroom_id", unique: true
  end

end
