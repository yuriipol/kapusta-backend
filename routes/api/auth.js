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

// router.get("/users/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));
// router.post(
//   "/users/verify",
//   validateBody(schemas.verifyEmailSchema),
//   ctrlWrapper(ctrl.resendVerifyEmail)
// );

// signin
router.post(
  "/users/login",
  validateBody(schemas.loginSchema),
  ctrlWrapper(ctrl.login)
);

router.get(
  "/users/google/login",

  authenticateSocial.authenticate("google", {
    scope: ["email", "profile"],
    failureMessage: "Cannot login to Google, please try again later!",
    failureRedirect: "http://localhost:3000/error",
    session: false,
  }),
  ctrlWrapper(ctrl.googleAuth)
);

router.get("/users/current", authenticate, ctrlWrapper(ctrl.getCurrent));

router.get("/users/logout", authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  "/users/avatars",
  authenticate,
  upload.single("avatar"),
  ctrlWrapper(ctrl.updateAvatar)
);

router.patch(
  "/users/balance",
  authenticate,
  validateBody(schemas.updateBalanceSchema),
  ctrlWrapper(ctrl.updateBalance)
);

module.exports = router;
