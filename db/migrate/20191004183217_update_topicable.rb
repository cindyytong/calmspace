class UpdateTopicable < ActiveRecord::Migration[5.2]
  def change
    rename_table :topic_joins, :topic_interests
  end
end
