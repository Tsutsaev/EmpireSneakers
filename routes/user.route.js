const {Router} = require('express')
const { usersController } = require('../controllers/user.controller')
const router = Router()

router.post('/auth',usersController.createUser)
router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getOneUser)
router.delete('/users/:id', usersController.deleteUser)

module.exports = router