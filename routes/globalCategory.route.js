const {Router} = require('express')
const { globalCategoriesController } = require('../controllers/globalCategory.controller')

const router = Router()

router.get('/globalCategories', globalCategoriesController.getGlobalCategories)
router.get('/globalCategories/:id', globalCategoriesController.getOneGlobalCategory)
router.post('/globalCategories', globalCategoriesController.createGlobalCategory)
router.delete('/globalCategories', globalCategoriesController.deleteGlobalCategory)

module.exports = router