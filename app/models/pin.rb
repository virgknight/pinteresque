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

    has_one_attached :photo
end
