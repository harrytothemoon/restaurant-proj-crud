const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// Sort Function
router.get('/', (req, res) => {
  const userId = req.user._id
  const sort = req.query.sort
  Restaurant.find({ userId })
    .lean()
    .sort(sort)
    .then(restaurants => res.render('index', { restaurants, sort }))
    .catch(error => console.log(error))
})

module.exports = router