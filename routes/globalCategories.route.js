const {Router} = require('express')
const { globalCategoriesController } = require('../controllers/globalCategory.controller')

const router = Router()

router.get('/globalCategories', globalCategoriesController.getGlobalCategories)
router.get('/globalCategories/:id', globalCategoriesController.getOneGlobalCategories)
router.post('/globalCategories', globalCategoriesController.createGlobalCategories)
router.delete('/globalCategories', globalCategoriesController.deleteGlobalCategories)

module.exports = router