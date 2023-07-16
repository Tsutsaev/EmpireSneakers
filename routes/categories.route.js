const {Router} = require('express')
const { categoriesController } = require('../controllers/categories.controller')
const router = Router()

router.post('/categories', categoriesController.createCategories)
router.get('/categories', categoriesController.getCategories)
router.get('/categories/:id', categoriesController.getOneCategories)
router.delete('/categories/:id', categoriesController.deleteCategories)

module.exports = router