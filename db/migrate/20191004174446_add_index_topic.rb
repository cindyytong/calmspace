class AddIndexTopic < ActiveRecord::Migration[5.2]
  def change
    change_column :topic_joins, :userable_type, :string, null: false 
  end
end
