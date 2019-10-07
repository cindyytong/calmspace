class ChangeChatRoomNote < ActiveRecord::Migration[5.2]
  def change
    change_column(:chat_rooms, :note_id, :integer)
  end
end
