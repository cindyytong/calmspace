class AddUserValidation < ActiveRecord::Migration[5.2]
  def change

    remove_column :members, :email
    remove_column :members, :password_digest
    remove_column :members, :session_token

  end
end
