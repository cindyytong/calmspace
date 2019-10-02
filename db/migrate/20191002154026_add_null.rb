class AddNull < ActiveRecord::Migration[5.2]
  def change
    change_column(:users, :email, :string, null: false)
    change_column(:users, :password_digest, :string,  null: false)
    change_column(:users, :session_token, :string, null: false)

    change_column(:therapists, :email, :string, null: false)
    change_column(:therapists, :password_digest, :string, null: false)
    change_column(:therapists, :session_token, :string, null: false)
  end
end
