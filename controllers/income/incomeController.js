const {addIncomeService} = require('./incomeService')

const addIncomeController = async (req, res, next) => {
  const {status, message} = await addIncomeService(req.body, req.user, req.user._id);
  res.status(status).json(message)
}

module.exports = {
  addIncomeController
}