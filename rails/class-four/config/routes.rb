Rails.application.routes.draw do
  root "animals#index"
  resources :animals
  get "/clear", to: "animals#clear"
end
