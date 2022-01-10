class CreateBoards < ActiveRecord::Migration[6.1]
  def change
    create_table :boards do |t|
      t.integer :owner_id, null: false
      t.index :owner_id
      t.string :name, null: false
      t.text :description
      t.boolean :private, null: false
      t.timestamps
    end
  end
end
