class RemoveUserColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email, :string 
    remove_column :users, :password_digest, :string 
    remove_column :users, :session_token, :string 

    remove_column :therapists, :email, :string 
    remove_column :therapists, :password_digest, :string 
    remove_column :therapists, :session_token, :string 
 
  end
end
