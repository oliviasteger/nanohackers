require 'nokogiri'
require 'open-uri'
require 'json'
data = []
@doc = Nokogiri::HTML(open("https://coinmarketcap.com"))
rows = @doc.css("tr")[1..-1]
rows.each do |row|
 cells = row.css("td")[1..-1]
 name = cells[0].text.split(" ")[1]
 price = cells[2].text.strip
 supply = cells[4].text.strip.split(" ")[0]
 change = cells[5].text.strip
 obj = {name: name, price: price, supply: supply, change: change}
 data.push(obj)
end
data = data.to_json
output = File.new("data.json", "w")
output.puts(data)
