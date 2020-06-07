const restaurantList = require('./restaurant.json')
const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant')
const User = require('../user')

const db = require('../../config/mongoose')

const SEED_USER = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '12345678'
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: '12345678'
  },
]

db.once('open', () => {
  console.log('mongodb connected!')
  userSeed(SEED_USER[0], 0)
  userSeed(SEED_USER[1], 3)
  console.log('done!')
})

function userSeed(userTest, dataFrom) {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(userTest.password, salt))
    .then(hash => User.create({
      name: userTest.name,
      email: userTest.email,
      password: hash
    }))
    .then(user => {
      const userId = user._id
      return Promise.all(Array.from(
        { length: 3 },
        (_, i) => Restaurant.create({
          name: restaurantList.results[i + dataFrom].name,
          category: restaurantList.results[i + dataFrom].category,
          rating: restaurantList.results[i + dataFrom].rating,
          image: restaurantList.results[i + dataFrom].image,
          location: restaurantList.results[i + dataFrom].location,
          google_map: restaurantList.results[i + dataFrom].google_map,
          phone: restaurantList.results[i + dataFrom].phone,
          description: restaurantList.results[i + dataFrom].description,
          userId
        })
      ))
    })
}

