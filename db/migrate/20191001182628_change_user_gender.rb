class ChangeUserGender < ActiveRecord::Migration[5.2]
  change_column(:users, :gender_pref, :string, default: 'none', inclusion: ['male', 'female', 'none'])
end
