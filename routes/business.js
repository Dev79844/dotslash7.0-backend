const express = require('express')
const {addBusiness, getAllBusinesses, getBusinessDetails} = require('../controllers/business')
const {isLoggedIn,checkRole} = require('../middleware/auth')

const router = express.Router()

router.route("/businesses").post(isLoggedIn, checkRole('seller'), addBusiness).get(isLoggedIn,getAllBusinesses)

router.get("/businesses/:id",isLoggedIn,getBusinessDetails)

module.exports = router