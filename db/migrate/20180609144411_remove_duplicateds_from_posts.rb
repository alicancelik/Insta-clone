class RemoveDuplicatedsFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :image_URL_updated_at, :datetime
    remove_column :posts, :image_URL_file_size, :integer
    remove_column :posts, :image_URL_content_type, :string
    remove_column :posts, :image_URL_file_name, :string
  end
end
