const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// Sort Function
router.get('/', (req, res) => {
  const sort = req.query.sort
  console.log(sort)
  Restaurant.find()
    .lean()
    .sort(sort)
    .then(restaurants => res.render('index', { restaurants, sort }))
    .catch(error => console.log(error))
})

module.exports = router