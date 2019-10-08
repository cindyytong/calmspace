class AddUsernameTherapist < ActiveRecord::Migration[5.2]
  def change
    add_column :therapists, :username, :string
    add_index :therapists, :username, unique: true  
  end
end
