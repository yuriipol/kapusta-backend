const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const googleAuth = async (req, res) => {
  const { _id, email } = req.user;

  const payload = {
    id: _id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "18h" });
  await User.findByIdAndUpdate(_id, { token });

  res.redirect(`http://localhost:3000/home?email=${email}&token=${token}`);
};

module.exports = googleAuth;
