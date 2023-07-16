const {Router} = require('express')
const { categoriesController } = require('../controllers/category.controller')
const router = Router()

router.post('/categories', categoriesController.createCategory)
router.get('/categories', categoriesController.getCategories)
router.get('/categories/:id', categoriesController.getOneCategory)
router.delete('/categories/:id', categoriesController.deleteCategory)

module.exports = router