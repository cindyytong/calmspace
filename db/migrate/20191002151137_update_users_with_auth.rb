class UpdateUsersWithAuth < ActiveRecord::Migration[5.2]
  def change
    change_column(:users, :email, :string) 
    change_column(:users, :password_digest, :string) 
    change_column(:users, :session_token, :string) 
    add_index :users, :email, name: "index_users_on_email", unique: true 
    add_index :users, :session_token, name: "index_users_on_session_token", unique: true 
  
    change_column(:therapists, :email, :string) 
    change_column(:therapists, :password_digest, :string) 
    change_column(:therapists, :session_token, :string) 
    add_index :therapists, :email, name: "index_therapists_on_email", unique: true 
    add_index :therapists, :session_token, name: "index_therapists_on_session_token", unique: true 

  end
end
