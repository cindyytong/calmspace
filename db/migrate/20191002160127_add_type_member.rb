class AddTypeMember < ActiveRecord::Migration[5.2]
  def change
    add_column(:members, :type, :string)
  end
end
