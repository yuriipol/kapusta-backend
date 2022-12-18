const express = require("express");
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const {
  validateBody,
  authenticate,
  upload,
  authenticateSocial,
} = require("../../middlewares");
const { schemas } = require("../../models/user");
const router = express.Router();

// signup
router.post(
  "/users/register",
  validateBody(schemas.registerSchema),
  ctrlWrapper(ctrl.register)
);

router.get("/users/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
router.post(
  "/users/verify",
  validateBody(schemas.verifyEmailSchema),
  ctrlWrapper(ctrl.resendVerifyEmail)
);

// signin
router.post(
  "/users/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get(
  "/users/google",
  authenticateSocial.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/users/google/callback",
  authenticateSocial.authenticate("google", { session: false }),
  ctrlWrapper(ctrl.googleAuth)
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
