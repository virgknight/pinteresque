class CreateFollows < ActiveRecord::Migration[6.1]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.index :follower_id
      t.references :followable, polymorphic: true
      t.timestamps
    end
  end
end
