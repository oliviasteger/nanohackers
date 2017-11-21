require 'sendgrid-ruby'
require 'open-uri'
require 'nokogiri'
require 'json'


apartment_page = "https://www.urbanoutfitters.com/home-decor-for-sale?price=0-25"
doc1 = Nokogiri::HTML(open(apartment_page))
apartment_items = doc1.css('span[itemprop="name"]').text
apartment_items = apartment_items.gsub(/\n/,",")
apartment_items = apartment_items.gsub(/\ , /," ")
apartment_items = apartment_items.gsub!(/"/, ' Inch')
apartment_document = JSON "sale" => apartment_items

apartment_file = File.new("apartmentsale.json", "a+")
apartment_file.puts(apartment_document)
apartment_file.close

music_page = "https://www.urbanoutfitters.com/music-sale?price=0-25"
doc2 = Nokogiri::HTML(open(music_page))
music_items = doc2.css('span[itemprop="name"]').text
music_items = music_items.gsub(/\n/,",")
music_items = music_items.gsub(/\ , /," ")
music_items = music_items.gsub!(/"/, ' Inch')
music_document = JSON "sale" => music_items

music_file = File.new("musicsale.json", "a+")
music_file.puts(music_document)
music_file.close
