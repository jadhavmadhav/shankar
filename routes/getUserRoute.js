

const express = require('express')
const postLoginRoute = require('../controller/PostLoginRout')

const router = express.Router()

router.post('/userlogin',postLoginRoute)

module.exports = router