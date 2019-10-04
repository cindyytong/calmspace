# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_04_184224) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "therapists", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.text "body"
    t.string "degree"
    t.string "gender", null: false
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["email"], name: "index_therapists_on_email", unique: true
    t.index ["first_name", "last_name"], name: "index_therapist_on_first_and_last_name", unique: true
    t.index ["session_token"], name: "index_therapists_on_session_token", unique: true
  end

  create_table "topic_interests", force: :cascade do |t|
    t.integer "userable_id", null: false
    t.integer "topic_id", null: false
    t.string "userable_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["topic_id", "userable_type"], name: "index_topic_interests_on_topic_id_and_userable_type"
  end

  create_table "topics", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_topics_on_title", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.boolean "over_age_13", null: false
    t.string "gender_pref", default: "none"
    t.integer "current_therapist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
