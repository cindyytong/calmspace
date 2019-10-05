class AddGoalsUser < ActiveRecord::Migration[5.2]
  def change
    add_column(:users, :goals, :text)
  end
end
