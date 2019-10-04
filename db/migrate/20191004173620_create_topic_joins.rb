class CreateTopicJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :topic_joins do |t|
      t.integer :userable_id, null: false 
      t.integer :topic_id, null: false 
      t.string :userable_type, inclusion: { in: [:user, :therapist]}
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false      
    end
  end
end
