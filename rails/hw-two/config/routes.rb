Rails.application.routes.draw do
  get "/animals", to: "animals#index"
  get "/animals/new", to: "animals#new"
  get "/animals/:id", to: "animals#show"
  post "/animals", to: "animals#create"
end
