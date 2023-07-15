const {Router} = require('express')
const { categoriesController } = require('../controllers/categories.controller')
const router = Router()

router.post('/categories', categoriesController.addCategory)

module.exports = router