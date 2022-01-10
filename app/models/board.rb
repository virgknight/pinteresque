# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  owner_id    :integer          not null
#  name        :string           not null
#  description :text
#  private     :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Board < ApplicationRecord
    validates :owner_id, :name, presence: true
    validates :private, inclusion: {in: [true, false]}
    after_initialize :default_to_public

    belongs_to :user,
    foreign_key: :owner_id,
    class_name: :User

    has_many :pinassignments,
    class_name: :BoardsPin

    has_many :pins,
    through: :pinassignments,
    source: :pin

    def default_to_public
        self.private ||= false
    end
end
