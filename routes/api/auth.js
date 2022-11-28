const express = require("express");
const ctrl = require("../../controllers/auth");

const { ctrlWrapper } = require("../../helpers");

const { validateBody, authenticate, upload } = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

// signup
router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

// signin
router.post(
  "/users/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get("/users/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/users/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/users",
  authenticate,
  validateBody(schemas.updateSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

module.exports = router;
