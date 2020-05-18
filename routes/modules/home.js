const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// Search function
router.get('/search', (req, res) => {
  const keyword = req.query.keyword
  Restaurant.find({ name: { $regex: keyword, $options: "i" } })
    .lean()
    .then(restaurants => res.render('index', { restaurants, keyword }))
    .catch(error => console.log(error))
})

// Create function
router.get('/new', (req, res) => {
  return res.render('new')
})
router.post('/new', (req, res) => {
  const { name, category, rating, image, location, google_map, phone, description } = req.body
  return Restaurant.create({ name, category, rating, image, location, google_map, phone, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router