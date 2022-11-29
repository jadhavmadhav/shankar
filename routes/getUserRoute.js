

const express = require('express')
const getUserController = require('../controller/getUserController')

const router = express.Router()

router.get('/user/:userName/:password',getUserController)

module.exports = router