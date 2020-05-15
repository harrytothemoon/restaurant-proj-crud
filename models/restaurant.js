const mongoose = require('mongoose')
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
  },
  rating: {
    type: String,
  },
  image: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  googleMap: {
    type: String,
  },
  phone: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },

})

module.exports = mongoose.model('Restaurant', restaurantSchema)