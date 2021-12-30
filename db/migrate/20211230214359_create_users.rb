class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.index :email

      t.string :username, null: false, unique: true
      t.index :username

      t.string :password_digest, null: false

      t.string :session_token, null: false, unique: true
      t.index :session_token

      t.string :first_name, null: false
      t.string :last_name, null: false
      t.text :short_bio
      t.string :pronouns

      t.timestamps
    end
  end
end
