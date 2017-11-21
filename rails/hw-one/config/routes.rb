Rails.application.routes.draw do
  # For details on the Domain Specific Language available within this file, see http://guides.rubyonrails.org/routing.html
  get "/calculator", to: "calculator#show"
  # controller -> action
  post "/add", to: "calculator#add"
  post "/subtract", to: "calculator#subtract"
  post "/multiply", to: "calculator#multiply"
  post "/divide", to: "calculator#divide"
end
