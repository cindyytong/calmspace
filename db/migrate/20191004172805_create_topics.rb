class CreateTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :topics do |t|
      t.string :title, null: false 
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index ["title"], name: "index_topics_on_title", unique: true
    end
  end
end
