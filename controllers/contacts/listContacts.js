const { Contact } = require("../../models/contact");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit, favorite } = req.query;

  const skip = (page - 1) * limit;

  const getFavoriteContact =
    favorite !== undefined ? { owner, favorite } : { owner };
  const result = await Contact.find(
    getFavoriteContact,
    "-createdAt -updatedAt",
    {
      skip,
      limit: +limit,
    }
  );
  res.json(result);
};

module.exports = listContacts;
