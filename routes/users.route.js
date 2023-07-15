const {Router} = require('express')
const { usersController } = require('../controllers/users.controller')
const router = Router()

router.post('/auth',usersController.addUser)
router.get('/users', usersController.getUsers)
router.delete('./users/:id', usersController.deleteUser)

module.exports = router