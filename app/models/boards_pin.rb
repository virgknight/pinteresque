# == Schema Information
#
# Table name: boards_pins
#
#  id         :bigint           not null, primary key
#  pin_id     :integer          not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class BoardsPin < ApplicationRecord
    validates :pin_id, :board_id, presence: true
    validates :board_id, uniqueness: {scope: :pin_id}

    belongs_to :pin,
    class_name: :Pin

    belongs_to :board,
    class_name: :Board
end
