

const express = require('express')
const deleteUserController = require('../controller/deleteUserController')

const router = express.Router()

router.delete('/delete-user/:userId',deleteUserController)

module.exports = router