
# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null

class User < ApplicationRecord
    validates :username, presence: true
    has_many :posts
    has_many :likes
end
