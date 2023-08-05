const Router = require("express");
const { productController } = require("../controllers/product.controller");
const router = Router();
const createMulter = require("../middleware/image.middleware");

const productUpload = createMulter("products");

router.get("/:id", productController.getOneProduct);
router.get("/", productController.getProducts);
router.post("/", productUpload.array("img"), productController.createProduct);
router.patch("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
