const { addExpenseService } = require("./expenseService");

const addExpenseController = async (req, res, next) => {
  const { status, message } = await addExpenseService(
    req.body,
    req.user,
    req.user._id
  );
  res.status(status).json(message);
};

module.exports = {
  addExpenseController,
};
