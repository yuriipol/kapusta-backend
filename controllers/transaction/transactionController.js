const {addTransactionIncomeService, addTransactionExpenseService} = require('./transactionService')

const addIncomeController = async (req, res, next) => {
  const {status, message} = await addTransactionIncomeService(req.body, req.user, req.user._id);
  res.status(status).json(message)
}


const addExpenseController = async (req, res, next) => {
  const { status, message } = await addTransactionExpenseService(req.body, req.user, req.user._id);
  res.status(status).json(message);
};


module.exports = {
  addIncomeController,
  addExpenseController
}