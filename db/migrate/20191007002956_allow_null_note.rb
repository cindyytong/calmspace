class AllowNullNote < ActiveRecord::Migration[5.2]
  def change
    change_column_null :chat_rooms, :note_id, true
  end
end
