require 'sinatra'

get "/:id" do
  "#{params[:id]}"
end
