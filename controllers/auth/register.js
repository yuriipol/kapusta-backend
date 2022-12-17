const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");

const { User } = require("../../models/user");

const { RequestError } = require("../../helpers");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw RequestError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const avatarURL = gravatar.url(email);


  const newUser = await User.create({
    email,
    password: hashPassword,
    avatarURL
  });

  res.status(201).json({
    'email': newUser.email,
    'id': newUser._id
  });
};

module.exports = register;
