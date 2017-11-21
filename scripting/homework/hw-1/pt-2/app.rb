require 'json'
require 'csv'

nyc_markets = CSV.read("New_York_City_Farmers_Markets.csv")
markets_twenty_twelve = CSV.read("marketsintwothousandtwelve.csv")

all_markets = []

nyc_markets.each do |market|
  if nyc_markets.index(market) > 0
    all_markets.push({
      "name" => market[0],
      "address" => market[2],
      })
      puts all_markets
    end
end

markets_twenty_twelve.each do |market|
  if markets_twenty_twelve.index(market) > 0
    all_markets.push({
      "name" => market[1],
      "address" => market[2],
      })
      puts all_markets
    end
end

File.open("farmers_markets.json","w") do |f|
  f.write(all_markets.to_json)
end
