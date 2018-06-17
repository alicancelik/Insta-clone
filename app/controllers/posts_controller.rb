class PostsController < ApplicationController

  def index
    @posts=Post.all.latest_first
  end

  def show
    @post = Post.find(params[:id])
  end

	def create
    @post = Post.new(post_params.merge(user_id: 1))
    @post.save!
    render :json => @post.as_json
    if @post.save
    redirect_to 'http://localhost:3000/users/index'
    end
    else
      
  end

  def like
    @post = Post.find(params[:id])
    like.save
      render :show
  end

  def unlike
    @post = Post.find(params[:id])
    like = Like.find_by(user_id: @user_id, post_id: @post.id)
    like.destroy
    render :show
  end

  def post_params
    params.require(:post).permit(:image)
  end
end