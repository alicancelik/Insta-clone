class UsersController < ApplicationController

  def index
    @posts = Post.all.order(:created_at).reverse.map do |p| 
      if (p.image_file_name.nil?) then p 
      else p.attributes.merge(image_URL: p.image.url) 
      end
    end
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
    @posts = Post.where(:user_id => params[:id]).order(:created_at).reverse.map do |p|
      if (p.image_file_name.nil?) then p 
      else p.attributes.merge(image_URL: p.image.url) 
      end
    end   
    render :show  
  end
  def user_params
    params.require(:user).permit(:username)
  end
end