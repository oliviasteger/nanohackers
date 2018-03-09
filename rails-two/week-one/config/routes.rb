Rails.application.routes.draw do
  resources :comments, path: '/users/posts/comments'
  resources :posts, path: '/users/posts'
  resources :users

  root "users#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
