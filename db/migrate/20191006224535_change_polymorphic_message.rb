class ChangePolymorphicMessage < ActiveRecord::Migration[5.2]
  def change
    rename_column :messages, :sender_id, :messageable_id
    add_column :messages, :messageable_type, :string, null: false
  end
end
