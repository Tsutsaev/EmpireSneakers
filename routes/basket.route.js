const Router = require("express");
const { basketController } = require("../controllers/basket.controller");
const router = Router();


router.get("/:id", basketController.getBasket);
router.patch("/add/:id", basketController.addToBasket);
router.delete("/delete/:id", basketController.deleteInBasket);

module.exports = router;
