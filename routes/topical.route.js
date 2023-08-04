const Router = require("express");
const { topicalController } = require("../controllers/topical.controller");
const router = Router();
const imageMiddleware = require('../middleware/image.middleware')


router.post('/',imageMiddleware.array("img", 5),topicalController.addTopical)
router.get('/:id', topicalController.getTopical)
router.delete('/:id', topicalController.deleteTopical)
router.patch('/:id', topicalController.updateTopical)

module.exports = router;