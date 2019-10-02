class DeleteMembersTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :members 
  end
end
