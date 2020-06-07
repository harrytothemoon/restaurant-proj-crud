const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const crud = require('./modules/crud')
const sort = require('./modules/sort')
const users = require('./modules/users')
const auth = require('./modules/auth')
const { authenticator } = require('../middleware/auth')

router.use('/restaurants', authenticator, crud)
router.use('/sort', authenticator, sort)
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home)

module.exports = router