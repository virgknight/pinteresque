# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all
Board.destroy_all
BoardsPin.destroy_all
Follow.destroy_all

require 'open-uri'

demo_user = User.create(email: "demo@gmail.com", username: "demouser", password: "football123", first_name: "Demo", last_name: "User", age: 99, short_bio: "!(i can think of a good bio)");
demo_profile = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/Screen+Shot+2022-01-09+at+10.57.36+AM.png");
demo_user.avatar.attach(io: demo_profile, filename: "orange-cat.jpeg");

user1 = User.create(email: "trixie@hotmail.com", username: "trixie", password: "unnnnhhhhh", first_name: "Trixie", last_name: "Mattel", age: 35);
user2 = User.create(email: "katya@icloud.com", username: "katya", password: "brightredscare", first_name: "Katya", last_name: "Zamolodchikova", age: 35);

### PINS USED IN SPLASH PAGE
# Splash 1: dinner ideas
pin1 = Pin.create!(owner_id: demo_user.id, title: "Delicious chicken pasta recipes");
photo1 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/chicken-pasta.jpeg");
pin1.photo.attach(io: photo1, filename: "chicken-pasta.jpeg");

pin2 = Pin.create!(owner_id: demo_user.id, title: "Delicious veggie recipes");
photo2 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/veggies.jpeg");
pin2.photo.attach(io: photo2, filename: "veggies.jpeg");

pin3 = Pin.create!(owner_id: demo_user.id, title: "tacos sabrosos");
photo3 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/tacos.jpeg");
pin3.photo.attach(io: photo3, filename: "tacos.jpeg");

pin4 = Pin.create!(owner_id: demo_user.id, title: "New York Slice", alt_text: "Michael Scott's favorite");
photo4 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/pizza.jpeg");
pin4.photo.attach(io: photo4, filename: "pizza.jpeg");

pin5 = Pin.create!(owner_id: demo_user.id, title: "12 Fancy Cocktails to try at your next dinner party");
photo5 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/cocktail.jpeg");
pin5.photo.attach(io: photo5, filename: "cocktail.jpeg");

pin6 = Pin.create!(owner_id: user2.id, title: "sausage dish");
photo6 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/sausage-dish.jpeg");
pin6.photo.attach(io: photo6, filename: "sausage-dish.jpeg");

pin7 = Pin.create!(owner_id: user1.id, title: "Chicken Shawarma", alt_text: "Simply delicious!");
photo7 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/shawarma.jpeg");
pin7.photo.attach(io: photo7, filename: "shawarma.jpeg");

# Splash 3: party decor
pin8 = Pin.create!(owner_id: demo_user.id, title: "Oooo la la", alt_text: "la vie est belle");
photo8 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/pink-french-food.jpeg");
pin8.photo.attach(io: photo8, filename: "pink-french-food.jpeg");

pin9 = Pin.create!(owner_id: user1.id, title: "10 photos to inspire your next 90's themed party", alt_text: "check it out on Buzzfeed");
photo9 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/disco-balls.jpeg");
pin9.photo.attach(io: photo9, filename: "disco-balls.jpeg");

pin10 = Pin.create!(owner_id: demo_user.id, title: "birthday party ideas!!");
photo10 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/funky-party.jpeg");
pin10.photo.attach(io: photo10, filename: "funky-party.jpeg");

pin11 = Pin.create!(owner_id: user1.id, title: "Champagne Wishes");
photo11 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/champage-tower.jpeg");
pin11.photo.attach(io: photo11, filename: "champage-tower.jpeg");

pin12 = Pin.create!(owner_id: demo_user.id, title: "~ p a r t y   i n s p o ~");
photo12 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/blue-balloons.jpeg");
pin12.photo.attach(io: photo12, filename: "blue-balloons.jpeg");

pin13 = Pin.create!(owner_id: demo_user.id, title: "Best Backyard Parties of 2022");
photo13 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/backyard-party.jpeg");
pin13.photo.attach(io: photo13, filename: "backyard-party.jpeg");

pin14 = Pin.create!(owner_id: demo_user.id, title: "Botanical Party");
photo14 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/botanical-party.jpeg");
pin14.photo.attach(io: photo14, filename: "botanical-party.jpeg");

# Splash 2: existential crisis 
pin15 = Pin.create!(owner_id: demo_user.id, title: "2022 Art");
photo15 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/pondering.jpeg");
pin15.photo.attach(io: photo15, filename: "pondering.jpeg");

pin16 = Pin.create!(owner_id: demo_user.id, title: "Ascension");
photo16 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/silhouette.jpeg");
pin16.photo.attach(io: photo16, filename: "silhouette.jpeg");

pin17 = Pin.create!(owner_id: demo_user.id, title: "in the void");
photo17 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/swimmer.jpeg");
pin17.photo.attach(io: photo17, filename: "swimmer.jpeg");

pin18 = Pin.create!(owner_id: user2.id, title: "Cute cats", alt_text: "he so sad :(");
photo18 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/cat-crisis.jpeg");
pin18.photo.attach(io: photo18, filename: "cat-crisis.jpeg");

pin19 = Pin.create!(owner_id: demo_user.id, title: "Best places to sit and think");
photo19 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/thinking-man.jpeg");
pin19.photo.attach(io: photo19, filename: "thinking-man.jpeg");

pin20 = Pin.create!(owner_id: user2.id, title: "Funny candles");
photo20 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/candle-crisis.jpeg");
pin20.photo.attach(io: photo20, filename: "candle-crisis.jpeg");

pin21 = Pin.create!(owner_id: user1.id, title: "Lisa Frank says question everything");
photo21 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/neon-animals.jpeg");
pin21.photo.attach(io: photo21, filename: "neon-animals.jpeg");

### Non-splash seed pins
pin22 = Pin.create!(owner_id: demo_user.id, title: "desert critters");
photo22 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/javelinas.jpeg");
pin22.photo.attach(io: photo22, filename: "javelinas.jpeg");

pin23 = Pin.create!(owner_id: demo_user.id, title: "Top 10 Most Adventurous Dog Breeds");
photo23 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/german-shepherd.jpeg");
pin23.photo.attach(io: photo23, filename: "german-shepherd.jpeg");

pin24 = Pin.create!(owner_id: user2.id, title: "k i t t i e s");
photo24 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/brown-kitten.jpeg");
pin24.photo.attach(io: photo24, filename: "brown-kitten.jpeg");

pin25 = Pin.create!(owner_id: demo_user.id, title: "hi friend");
photo25 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/alpaca.jpeg");
pin25.photo.attach(io: photo25, filename: "alpaca.jpeg");

pin26 = Pin.create!(owner_id: user1.id, title: "Why You Need these Ocean Safe Skincare Products", alt_text: "what's up with the title?");
photo26 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/Why+You+Need+these+Ocean-Safe+Skincare+Products.jpeg");
pin26.photo.attach(io: photo26, filename: "ocean-skincare.jpeg");

pin27 = Pin.create!(owner_id: user1.id, title: "20 Amazing Open Bathroom Design Inspiration");
photo27 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/20+Amazing+Open+Bathroom+Design+Inspiration+-+The+Architects+Diary.png");
pin27.photo.attach(io: photo27, filename: "open-bathroom.jpeg");

pin28 = Pin.create!(owner_id: user2.id, title: "vacation");
photo28 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/hammock.jpeg");
pin28.photo.attach(io: photo28, filename: "hammock.jpeg");

pin29 = Pin.create!(owner_id: demo_user.id, title: "DREAMSCAPES");
photo29 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/dreamy-beach.jpeg");
pin29.photo.attach(io: photo29, filename: "dreamy-beach.jpeg");

pin30 = Pin.create!(owner_id: demo_user.id, title: "city livin", alt_text: "find skating rinks near you");
photo30 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/ice-skating.jpeg");
pin30.photo.attach(io: photo30, filename: "ice-skating.jpeg");

pin31 = Pin.create!(owner_id: user1.id, title: "handsome boy");
photo31 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/happy-dog.jpeg");
pin31.photo.attach(io: photo31, filename: "happy-dog.jpeg");

pin32 = Pin.create!(owner_id: demo_user.id, title: "Picnic Spread");
photo32 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/picnic-spread.jpeg");
pin32.photo.attach(io: photo32, filename: "picnic-spread.jpeg");

pin33 = Pin.create!(owner_id: user2.id, title: "delicious", alt_text: "but too pretty to eat");
photo33 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/marie-cookies.jpeg");
pin33.photo.attach(io: photo33, filename: "marie-cookies.jpeg");

pin34 = Pin.create!(owner_id: demo_user.id, title: "I M P E R I U M");
photo34 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/statues.jpeg");
pin34.photo.attach(io: photo34, filename: "statues.jpeg");

pin35 = Pin.create!(owner_id: user1.id, title: "I Photographed the Ocean", alt_text: "and it turned out great");
photo35 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/seaside-picnic.jpeg");
pin35.photo.attach(io: photo35, filename: "seaside-picnic.jpeg");

pin36 = Pin.create!(owner_id: user2.id, title: "leap of faith");
photo36 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/water.jpeg");
pin36.photo.attach(io: photo36, filename: "water.jpeg");

pin37 = Pin.create!(owner_id: demo_user.id, title: "VSOP", alt_text: "valencia orange");
photo37 = URI.open("https://pinteresque-seeds.s3.us-west-1.amazonaws.com/VSOP.jpeg");
pin37.photo.attach(io: photo37, filename: "VSOP.jpeg");

### Boards
board1 = Board.create!(owner_id: demo_user.id, name: "my favorite animals", description: "these animals are just the best");
bp1 = BoardsPin.create!(pin_id: pin22.id, board_id: board1.id);
bp2 = BoardsPin.create!(pin_id: pin23.id, board_id: board1.id);
bp3 = BoardsPin.create!(pin_id: pin24.id, board_id: board1.id);
bp4 = BoardsPin.create!(pin_id: pin25.id, board_id: board1.id);

board2 = Board.create!(owner_id: demo_user.id, name: "food", description: "is it lunchtime yet?");
bp5 = BoardsPin.create!(pin_id: pin8.id, board_id: board2.id);
bp6 = BoardsPin.create!(pin_id: pin4.id, board_id: board2.id);
bp7 = BoardsPin.create!(pin_id: pin2.id, board_id: board2.id);
bp8 = BoardsPin.create!(pin_id: pin1.id, board_id: board2.id);
bp9 = BoardsPin.create!(pin_id: pin6.id, board_id: board2.id);
bp10 = BoardsPin.create!(pin_id: pin5.id, board_id: board2.id);
bp11 = BoardsPin.create!(pin_id: pin3.id, board_id: board2.id);

board3 = Board.create!(owner_id: user2.id, name: "anti memes");
bp12 = BoardsPin.create!(pin_id: pin21.id, board_id: board3.id);
bp13 = BoardsPin.create!(pin_id: pin18.id, board_id: board3.id);
bp14 = BoardsPin.create!(pin_id: pin20.id, board_id: board3.id);

### Follows
# follow1 = Follow.create!(follower_id: user1.id, followable_id: board2.id, followable_type: "Board");
# follow2 = Follow.create!(follower_id: demo_user.id, followable_id: board3.id, followable_type: "Board");
follow3 = Follow.create!(follower_id: user2.id, followable_id: demo_user.id, followable_type: "User");
follow4 = Follow.create!(follower_id: demo_user.id, followable_id: user2.id, followable_type: "User");
follow5 = Follow.create!(follower_id: user1.id, followable_id: user2.id, followable_type: "User");
follow6 = Follow.create!(follower_id: demo_user.id, followable_id: user1.id, followable_type: "User");
follow7 = Follow.create!(follower_id: user2.id, followable_id: user1.id, followable_type: "User");
follow8 = Follow.create!(follower_id: user1.id, followable_id: demo_user.id, followable_type: "User");