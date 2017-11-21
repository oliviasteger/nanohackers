require "csv"

ary = CSV.read("telephone-numbers-split.csv")
ary each.do |full_name|
  split_name = full_name[0].split(" ")
  "full name".split(" ")
  puts "#{split_name[0]},#{split_name[1]}"
end
#NEED TO DOWNLOAD NEW RUBY VERSION

CSV.open("new-file.csv", "wb") do |csv|
  # csv << means write this into the file
  csv << ["one line", "two lines"]
end
