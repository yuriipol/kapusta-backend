const { Contact } = require("../../models/contact");
const { RequestError } = require("../../helpers");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw RequestError(404);
  }

  res.json(result);
};

module.exports = updateContact;
