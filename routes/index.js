const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const crud = require('./modules/crud')
const sort = require('./modules/sort')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, crud)
router.use('/sort', authenticator, sort)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router