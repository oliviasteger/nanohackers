Rails.application.routes.draw do
  get "/animals", to: "animals#index"
  get "/animals/show", to: "animals#show"
  get "/animals/new", to: "animals#new"
  post "/animals", to: "animals#create"
end
