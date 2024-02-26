const express = require ('express');
const router = express.Router();
const UserRoute = require('./user')
const GetHome = require('./home')
const updateRoute=require("./update")
router.use('/user', UserRoute)
router.use("/update",updateRoute)
router.use ('/home', GetHome)

module.exports = router;