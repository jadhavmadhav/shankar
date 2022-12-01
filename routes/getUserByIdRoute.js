
const express = require('express')
const getUserByIdController = require('../controller/getUserByIdcontroller')

const router = express.Router()

router.get('/user/:userId',getUserByIdController)

module.exports = router