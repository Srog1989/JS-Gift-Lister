# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Sarah = User.create(name: "Sarah")
Jordan = User.create(name: "Jordan")

gift = Sarah.gifts.build(name: "Coat", cost: 75)
gift.save
present = Jordan.gifts.build(name: "Fishing Pole", cost: 90)
present.save