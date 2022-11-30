

const express = require('express')
const putUserController = require('../controller/putUserController')

const router = express.Router()

router.put('/putuser/:userId',putUserController)

module.exports = router