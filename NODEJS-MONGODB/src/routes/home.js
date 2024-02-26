const express = require ('express');
const router = express.Router();
const {GetHome} = require('../controller/home')

router.get('/', GetHome)

module.exports = router;