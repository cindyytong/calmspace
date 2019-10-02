class RemoveChatFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column(:users, :chatroom_id)
  end
end
