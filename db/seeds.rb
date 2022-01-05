# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all

require 'open-uri'

users = User.create([
    {email: "demo@demo.gmail.com", username: "demouser", password: "football123", first_name: "Demo", last_name: "User", age: 99}
])

### PINS USED IN SPLASH PAGE
# Splash 1: dinner ideas
pin1 = Pin.create!(owner_id: 1, title: "Delicious chicken pasta recipes");
photo1 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/chicken-pasta.jpeg");
pin1.photo.attach(io: photo1, filename: "chicken-pasta.jpeg");

pin2 = Pin.create!(owner_id: 1, title: "Delicious veggie recipes");
photo2 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/veggies.jpeg");
pin2.photo.attach(io: photo2, filename: "veggies.jpeg");

pin3 = Pin.create!(owner_id: 1, title: "Tacos sabrosos");
photo3 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/tacos.jpeg");
pin3.photo.attach(io: photo3, filename: "tacos.jpeg");

pin4 = Pin.create!(owner_id: 1, title: "New York Slice");
photo4 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/pizza.jpeg");
pin4.photo.attach(io: photo4, filename: "pizza.jpeg");

pin5 = Pin.create!(owner_id: 1, title: "12 Fancy Cocktails to try at your next dinner party");
photo5 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/cocktail.jpeg");
pin5.photo.attach(io: photo5, filename: "cocktail.jpeg");

pin6 = Pin.create!(owner_id: 1, title: "Yum :D");
photo6 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/sausage-dish.jpeg");
pin6.photo.attach(io: photo6, filename: "sausage-dish.jpeg");

pin7 = Pin.create!(owner_id: 1, title: "Chicken Shawarma");
photo7 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/shawarma.jpeg");
pin7.photo.attach(io: photo7, filename: "shawarma.jpeg");

# Splash 3: party decor
pin8 = Pin.create!(owner_id: 1, title: "Oooo la la");
photo8 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/pink-french-food.jpeg");
pin8.photo.attach(io: photo8, filename: "pink-french-food.jpeg");

pin9 = Pin.create!(owner_id: 1, title: "10 photos to inspire your next 90's themed party");
photo9 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/disco-balls.jpeg");
pin9.photo.attach(io: photo9, filename: "disco-balls.jpeg");

pin10 = Pin.create!(owner_id: 1, title: "birthday party ideas!!");
photo10 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/funky-party.jpeg");
pin10.photo.attach(io: photo10, filename: "funky-party.jpeg");

pin11 = Pin.create!(owner_id: 1, title: "Champagne Wishes");
photo11 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/champage-tower.jpeg");
pin11.photo.attach(io: photo11, filename: "champage-tower.jpeg");

pin12 = Pin.create!(owner_id: 1, title: "~ p a r t y   i n s p o ~");
photo12 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/blue-balloons.jpeg");
pin12.photo.attach(io: photo12, filename: "blue-balloons.jpeg");

pin13 = Pin.create!(owner_id: 1, title: "Best Backyard Parties of 2022");
photo13 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/backyard-party.jpeg");
pin13.photo.attach(io: photo13, filename: "backyard-party.jpeg");

pin14 = Pin.create!(owner_id: 1, title: "Botanical Party");
photo14 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/botanical-party.jpeg");
pin14.photo.attach(io: photo14, filename: "botanical-party.jpeg");

# Splash 2: existential crisis 
pin15 = Pin.create!(owner_id: 1, title: "2022 Art");
photo15 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/pondering.jpeg");
pin15.photo.attach(io: photo15, filename: "pondering.jpeg");

pin16 = Pin.create!(owner_id: 1, title: "Ascension");
photo16 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/silhouette.jpeg");
pin16.photo.attach(io: photo16, filename: "silhouette.jpeg");

pin17 = Pin.create!(owner_id: 1, title: "swimming in the void");
photo17 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/swimmer.jpeg");
pin17.photo.attach(io: photo17, filename: "swimmer.jpeg");

pin18 = Pin.create!(owner_id: 1, title: "Cute cats");
photo18 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/cat-crisis.jpeg");
pin18.photo.attach(io: photo18, filename: "cat-crisis.jpeg");

pin19 = Pin.create!(owner_id: 1, title: "Best places to sit and think");
photo19 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/thinking-man.jpeg");
pin19.photo.attach(io: photo19, filename: "thinking-man.jpeg");

pin20 = Pin.create!(owner_id: 1, title: "Funny candles");
photo20 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/candle-crisis.jpeg");
pin20.photo.attach(io: photo20, filename: "candle-crisis.jpeg");

pin21 = Pin.create!(owner_id: 1, title: "Lisa Frank says question everything");
photo21 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/neon-animals.jpeg");
pin21.photo.attach(io: photo21, filename: "neon-animals.jpeg");