Rails.application.routes.draw do
  root "photos#index"
  resources :photos
  get '/photos/destroy/:id', to: 'photos#destroy', as: 'destroy_photos'
end
