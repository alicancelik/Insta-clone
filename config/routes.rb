Rails.application.routes.draw do
  get 'users/index' => 'users#index'
  get 'posts/index' => 'posts#index'
  post '/posts' => 'posts#create'
  get 'users/:id' => 'users#show', as: 'user'
  get 'posts/new' => 'posts#new', as: 'new_post'
end
