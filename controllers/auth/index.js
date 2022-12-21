const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
// const updateSubscription = require("./updateSubscription");
const updateBalance = require("./updateBalance");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");
const googleAuth = require("./googleAuth");
const getUserById = require("./getUserById");

module.exports = {
  register,
  login,
  getCurrent,
  logout,
  // updateSubscription,
  updateBalance,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
  googleAuth,
  getUserById,
};
