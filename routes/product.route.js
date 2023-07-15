const Router = require("express");
const { productController } = require("../controllers/product.controller");
const router = Router();

router.get("/:id", productController.getOneProduct);
router.get("/all", productController.getProducts);
router.post("/create", productController.createProduct);
router.patch("/update/:id", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
