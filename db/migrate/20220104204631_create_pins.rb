class CreatePins < ActiveRecord::Migration[6.1]
  def change
    create_table :pins do |t|
      t.integer :owner_id, null: false
      t.index :owner_id

      t.string :title, null: false
      t.text :alt_text
      t.timestamps
    end
  end
end
