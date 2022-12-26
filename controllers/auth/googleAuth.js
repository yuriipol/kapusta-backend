const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { SECRET_KEY, BASE_URL } = process.env;

const googleAuth = async (req, res) => {
  const { _id, email } = req.user;

  const payload = {
    id: _id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "18h" });
  await User.findByIdAndUpdate(_id, { token });

  res.redirect(`${BASE_URL}home?email=${email}&token=${token}`);
};

module.exports = googleAuth;
