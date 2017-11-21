require "Faker"
require "CSV"

CSV.open("info.csv", "wb") do |csv|
  csv << ["First Name", "Last Name", "Email", "Phone Number", "Latitude", "Longitude"]
  csv << [Faker::Name.first_name,Faker::Name.last_name,Faker::Internet.email,Faker::Number.number(10),Faker::Address.latitude,Faker::Address.longitude]
  puts info.csv
end
