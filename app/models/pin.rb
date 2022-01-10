# == Schema Information
#
# Table name: pins
#
#  id         :bigint           not null, primary key
#  owner_id   :integer          not null
#  title      :string           not null
#  alt_text   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Pin < ApplicationRecord
    validates :owner_id, :title, presence: true

    belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

    has_many :boardassignments,
    class_name: :BoardsPin

    has_many :boards,
    through: :boardassignments,
    source: :board

    has_one_attached :photo
end
