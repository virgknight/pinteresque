# == Schema Information
#
# Table name: follows
#
#  id              :bigint           not null, primary key
#  follower_id     :integer          not null
#  followable_type :string
#  followable_id   :bigint
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Follow < ApplicationRecord
    validates :follower_id, presence: true

    belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User

    belongs_to :followable, polymorphic: true
end
