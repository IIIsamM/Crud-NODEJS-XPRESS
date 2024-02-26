const express = require ('express');
const router = express.Router();
const {GetUser, PostUser,deleteUser,updateUser,formUser} = require('../controller/user')
const {AddUser} = require('../controller/add')


router.get('/', GetUser) // TRAE USUARIOS
router.post('/', PostUser)
router.get('/add', AddUser)
router.post('/', PostUser)
router.post('/:id', deleteUser)// El metodo correcto que es delete no puede ser utilizado desde ejs o html

module.exports = router;