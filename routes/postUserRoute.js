

const express = require('express')
const postUserController = require('../controller/postUser')

const router = express.Router()

router.post('/user',postUserController)

module.exports = router