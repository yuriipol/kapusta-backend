const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndRemove(
    { _id: contactId, owner },
    {
      new: true,
    }
  );
  if (!result) {
    throw RequestError(404);
  }
  res.json({
    message: "contact deleted",
  });
};

module.exports = removeContact;
