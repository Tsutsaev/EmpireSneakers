const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();

router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getOneUser);
router.delete("/:id", usersController.deleteUser);
router.post("/signUp", usersController.signUp);
router.post("/signIn",  usersController.signIn);

module.exports = router;
