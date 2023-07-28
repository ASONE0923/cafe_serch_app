class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  include Devise::JWT::RevocationStrategies::JTIMatcher
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable,
        :jwt_authenticatable, jwt_revocation_strategy: self

  def generate_jwt
    JWT.encode({ user_id: self.id }, Rails.application.secrets.secret_key_base, 'HS256')
  end
end
