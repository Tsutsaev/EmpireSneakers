const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();
const authMiddleware = require('../middleware/auth.middleware')

//router.post("/auth", usersController.createUser);
router.get("/", usersController.getAllUsers);
router.get("/:id", usersController.getOneUser);
router.delete("/:id", usersController.deleteUser);
router.post("/signUp", usersController.signUp);
router.post("/signIn", authMiddleware,usersController.signIn);

module.exports = router;
