const { User } = require("../../models/user");
const { RequestError } = require("../../helpers");

const getById = async (req, res) => {
  const { contactId } = req.params;
  console.log(req.params);
  const result = await User.findById(contactId);
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = getById;
