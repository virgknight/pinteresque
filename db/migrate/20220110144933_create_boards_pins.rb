class CreateBoardsPins < ActiveRecord::Migration[6.1]
  def change
    create_table :boards_pins do |t|
      t.integer :pin_id, null: false
      t.index :pin_id
      t.integer :board_id, null: false
      t.timestamps
    end
    add_index :boards_pins, [:board_id, :pin_id], unique: true
  end
end
