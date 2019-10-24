class AddMatchesUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :therapist_match_ids, :integer, array: true, default: []
  end
end
