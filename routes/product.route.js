const Router = require("express");
const { productController } = require("../controllers/product.controller");
const router = Router();

router.get("/:id", productController.getOneProduct);
router.get("/", productController.getProducts);
router.post("/", productController.createProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
