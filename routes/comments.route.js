const Router = require("express");
const router = Router();
const { commentController } = require("../controllers/comment.controller");

router.get("/:id", commentController.getOneComment);
router.get("/", commentController.getComments);
router.post("/", commentController.createComment);
router.delete("/:id", commentController.deleteComment);

module.exports = router;
