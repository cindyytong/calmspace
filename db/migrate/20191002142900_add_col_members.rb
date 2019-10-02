class AddColMembers < ActiveRecord::Migration[5.2]
  def change
    add_column :members, :email, :string, null: false
    add_column :members, :password_digest, :string, null: false
    add_column :members, :session_token, :string, null: false 
    add_column :members, :created_at, :datetime, null: false
    add_column :members, :updated_at, :datetime, null: false
    add_index :members, :email, name: "index_members_on_email", unique: true
    add_index :members, :session_token, name: "index_members_on_session_token", unique: true
  end
end
