class AddAgeToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :age, :integer, null: false
  end
end
