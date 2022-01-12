# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  first_name      :string
#  last_name       :string
#  short_bio       :text
#  pronouns        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  age             :integer          not null
#  display_name    :string
#
class User < ApplicationRecord
    validates :email, :username, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    validates :age, presence: true, numericality: { greater_than_or_equal_to: 13 } 
    after_initialize :ensure_session_token
    after_validation :ensure_display_name

    has_many :pins,
    dependent: :destroy,
    foreign_key: :owner_id,
    class_name: :Pin

    has_many :boards,
    dependent: :destroy,
    foreign_key: :owner_id,
    class_name: :Board

    has_many :follows,
    dependent: :destroy,
    foreign_key: :follower_id,
    class_name: :Follow

    has_many :followers, as: :followable

    has_one_attached :avatar

    attr_reader :password

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
        self.session_token ||= self.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.generate_session_token
        self.save!
        self.session_token
    end

    def ensure_display_name
        if self.first_name
            self.display_name = self.first_name
            self.display_name += " " + self.last_name if self.last_name
        else
            self.display_name = self.username
        end
    end
end
