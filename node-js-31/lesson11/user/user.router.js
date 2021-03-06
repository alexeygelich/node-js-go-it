const { Router } = require("express");
const User = require("./User");
const UserController = require("./user.controller");

const router = Router();

router.post("/login", UserController.validateLogin, UserController.login);
router.get("/", UserController.getUsers);
router.get("/:id", UserController.validateId, UserController.getUserById);
router.post(
  "/sign-up",
  UserController.validateCreateUser,
  UserController.authorize,
  UserController.signUpUser
);
router.put(
  "/:id",
  UserController.validateUpdateUser,
  UserController.authorize,
  UserController.validateId,
  UserController.updateUser
);
router.delete(
  "/:id",
  UserController.validateId,
  UserController.authorize,
  UserController.deleteUser
);
router.post("/:id/tasks", UserController.authorize, UserController.createTask);
router.delete(
  "/:id/tasks/:taskId",
  UserController.authorize,
  UserController.deleteTask
);
router.get("/verify/:token", UserController.verifyUser);

module.exports = router;
