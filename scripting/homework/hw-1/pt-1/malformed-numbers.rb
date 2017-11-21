require "csv"

goodNumbers = []

File.open("import_telephone_numbers.csv") do |csv|
  csv.each do |row|
    num = row.gsub(/[^0-9]/, "")[-10..-1]
    goodNumbers.push("1-#{num[0..2]}-#{num[3..5]}-#{num[6..9]}")
  end
end

CSV.open("formatted_numbers.csv", "wb") do |csv|
  goodNumbers.each do |row|
    csv << [row]
  end
end
puts goodNumbers
