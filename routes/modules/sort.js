const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// Sort Function
router.get('/:sort', (req, res) => {
  let sort = req.params.sort
  Restaurant.find()
    .lean()
    .sort(sort)
    .then(restaurants => res.render('index', { restaurants, sort }))
    .catch(error => console.log(error))
})

module.exports = router