require 'sinatra'
require 'titleize'

puts "Name:"
name = gets
name = name.titleize

initial = name.split(" ")[0]

puts "Short Description (3/4 Sentences):"
bio = gets

puts "GitHub Link:"
web = gets

puts "Your Email:"
email = gets

puts "Languages:"
languages = gets
languages = languages.gsub(/,/,"")
languages = languages.downcase

colors = ""
puts "Choose a color scheme: \n A. maroon accent, gray text, tan background \n B. teal accent, gray text, white background \n C. navy accent, black text, yellow background"
colors = gets
colors = colors.downcase

if colors == "a"
  accent = "#990000"
  text = "#1a0000"
  background = "#e2cfb6"

elsif colors == "b"
  accent = "#388186"
  text = "#2E2B2B"
  background = "#FDF6F6"

elsif colors == "c"
  accent = "#21294C"
  text = "#141829"
  background = "#F9F2D7"

else
  accent = "#990000"
  text = "#1a0000"
  background = "#e2cfb6"
end

get "/" do
  "<html><head><meta charset='utf-8'><meta name='viewport' content='width=device-width'><title>" + name + "</title><link href='https://fonts.googleapis.com/css?family=Inconsolata' rel='stylesheet'><style>#initial {text-transform: lowercase;font-size: 75px;text-align: top;margin: 0px;color: " + accent + ";text-decoration: none;}body {font-family: 'Inconsolata', monospace;background-color:" + background + ";color:" + text + ";padding-left: 20%;text-align: bottom;}a {color: " + accent + ";text-decoration: underline;}#lang {color:  " + accent + ";}p {vertical-align: bottom;}div {height: 20%;width: 60%;position: fixed;bottom: 0;padding-bottom: 120px;}</style></head><body><a href='" + web + "' id='initial'>" + initial + "</a><p id='lang'>" + languages + "</p><a href='mailto:" + email + "'>c o n t a c t</a><div><p>" + bio + "</p></div></body></html>"
end
