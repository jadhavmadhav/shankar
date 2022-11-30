

const express = require('express')
const getAllUserController = require('../controller/getAllUserController')

const router = express.Router()

router.get('/users',getAllUserController)

module.exports = router