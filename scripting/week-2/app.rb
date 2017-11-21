require 'sinatra'
require 'twilio-ruby'

get '/recieve_sms' do
  content_type 'text/xml'
  response = Twilio::TwiML::Response.new do |r|
    r.message 'HELLO DARKNESS MY OLD FRIEND'
  end
  response.to_xml
end

post '/send_sms' do
  to = params ["to"]
  message = params ["body"]
  client= Twilio::REST::Client.new(
  ENV["TWILIO_ACCOUNT_SID"],
  ENV["TWILIO_AUTH_TOKEN"]
  )
  client.messages.create(
    to: "+18456419312",
    from: "+19176344130",
    body: "HELLO DARKNESS MY OLD FRIEND"
  )
end
