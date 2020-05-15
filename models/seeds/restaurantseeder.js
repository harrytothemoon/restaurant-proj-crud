const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const restaurantList = require('./restaurant.json')

mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')

  for (let i = 0; i < restaurantList.results.length; i++) {
    Restaurant.create({ name: restaurantList.results[i].name, category: restaurantList.results[i].category, rating: restaurantList.results[i].rating, image: restaurantList.results[i].image, location: restaurantList.results[i].location, google_map: restaurantList.results[i].google_map, phone: restaurantList.results[i].phone, description: restaurantList.results[i].description })
  }

  console.log('done!')
})

