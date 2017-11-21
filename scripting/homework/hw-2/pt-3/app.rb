require "google_drive"
require "dotenv"
require "soda"

client = SODA::Client.new({:domain => "data.cityofnewyork.us", :app_token => "APP_TOKEN"})
response = client.get("tvzg-rcgb")
puts response
session = GoogleDrive::Session.from_config("config.json")
ws = session.spreadsheet_by_key("1_yPBvfN0Iyp5xsPj2ewkDrb1GvQqX_vIoKYt7kgv4IQ").worksheets[0]
ws[1, 1] = "YEAR"
ws[1, 2] = "NUMBER OF INCIDENTS"


(0..response.length).each do |i|
  ws[i+2, 1] = response[i].fiscal_year
  ws[i+2, 2] = response[i].number_of_incidents
  ws.save
end
