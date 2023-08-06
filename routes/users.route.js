const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();
const createMulter = require("../middleware/image.middleware");

const userUpload = createMulter("users");

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getOneUser);
router.delete("/:id", usersController.deleteUser);
router.post("/signUp", userUpload.array("avatar"), usersController.signUp);
router.patch(
  "/avatar/:id",
  userUpload.array("avatar"),
  usersController.updateAvatar
);
router.post("/signIn", usersController.signIn);

module.exports = router;
