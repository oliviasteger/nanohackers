Rails.application.routes.draw do
  root "animals#index"
  resources :animals
  resources :visits
  get "/clear", to: "animals#clear"
  get "/clear2", to: "animals#clear2"
end
