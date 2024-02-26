const express = require ('express');
const router = express.Router();

const {updateUser,formUser} = require('../controller/user')
router.post('/:id', updateUser)
router.get("/form/:id",formUser)



module.exports = router;