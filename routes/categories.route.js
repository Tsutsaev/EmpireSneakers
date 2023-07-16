const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller");
const router = Router();

router.post("/", categoriesController.createCategories);
router.get("/", categoriesController.getCategories);
router.get("/:id", categoriesController.getOneCategories);
router.delete("/:id", categoriesController.deleteCategories);

module.exports = router;
