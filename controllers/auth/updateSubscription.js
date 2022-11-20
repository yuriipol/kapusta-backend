const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { userId } = req.params;

  const result = await User.findOneAndUpdate(userId, req.body, {
    new: true,
  });

  if (!result) {
    throw RequestError(404);
  }

  res.json({
    name: result.name,
    email: result.email,
    subscription: result.subscription,
  });
};

module.exports = updateSubscription;
