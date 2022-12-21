const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const googleAuth = async (req, res) => {
  const { _id, email } = req.user;
  console.log("email-googleAuth", email);

  const payload = {
    id: _id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "18h" });
  await User.findByIdAndUpdate(_id, { token });
  //   res.send(`<h2>success registration</h2>`);
  res.json({
    token,
    user: {
      email: email,
      id: _id,
    },
  });
};

module.exports = googleAuth;
