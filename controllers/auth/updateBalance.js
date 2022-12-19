const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const updateBalance = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });

  if (!result) {
    throw RequestError(404);
  }

  res.json({
    email: result.email,
    balance: result.balance,
  });
};

module.exports = updateBalance;
