const Router = require("express");
const { topicalController } = require("../controllers/topical.controller");
const router = Router();
const createMulter = require("../middleware/image.middleware");

const uploadTopical = createMulter("topical");

router.post("/", uploadTopical.array("img", 5), topicalController.addTopical);
router.get("/:id", topicalController.getTopical);
router.delete("/:id", topicalController.deleteTopical);
router.patch("/:id", topicalController.updateTopical);

module.exports = router;
