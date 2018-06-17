# == Schema Information
#
# Table name: posts
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  title              :string          
#  image_url          :string


class Post < ApplicationRecord
  validates :user_id, presence: true;
  has_attached_file :image, styles: { medium: "900x900>", thumb: "100x100>" }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
  belongs_to :user
  has_many :likes

end
