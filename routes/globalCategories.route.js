const { Router } = require("express");
const {
  globalCategoriesController,
} = require("../controllers/globalCategory.controller");
const router = Router();

router.get("/", globalCategoriesController.getGlobalCategories);
router.get("/:id", globalCategoriesController.getOneGlobalCategories);
router.post("/", globalCategoriesController.createGlobalCategories);
router.delete("/:id", globalCategoriesController.deleteGlobalCategories);

module.exports = router;
