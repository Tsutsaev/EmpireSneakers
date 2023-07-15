const Router = require("express");
const { favoriteController } = require("../controllers/favorite.controller");
const router = Router();


router.get("/:id", favoriteController.getFavorite);
router.post("/create/:id", favoriteController.createFavorite)
router.post("/add/:id", favoriteController.addToFavorite);
router.delete("/delete/:id", favoriteController.deleteInFavorite);

module.exports = router;
