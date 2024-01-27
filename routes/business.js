const express = require('express')
const {addBusiness, getAllBusinesses} = require('../controllers/business')
const {isLoggedIn,checkRole} = require('../middleware/auth')

const router = express.Router()

router.route("/businesses").post(isLoggedIn, checkRole('seller'), addBusiness).get(isLoggedIn,getAllBusinesses)

module.exports = router