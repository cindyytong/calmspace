class AddIndexTopicType < ActiveRecord::Migration[5.2]
  def change
    add_index :topic_interests, [:topic_id, :userable_type]
  end
end
