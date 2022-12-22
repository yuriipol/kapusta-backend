const {
  addTransactionIncomeService, 
  addTransactionExpenseService,
  getTransactionIncomeService,
  getTransactionExpenseService,
  deleteTransactionService,
  getTransactionIncomeCategoriesService,
  getTransactionExpenseCategoriesService,
  getTransactionPeriodDataService
} = require('./transactionService');


const addIncomeController = async (req, res) => {
  const {status, message} = await addTransactionIncomeService(req.body, req.user, req.user._id);
  res.status(status).json(message)
};


const addExpenseController = async (req, res) => {
  const { status, message } = await addTransactionExpenseService(req.body, req.user, req.user._id);
  res.status(status).json(message);
};


const getIncomeController = async (req, res) => {
  const { status, message } = await getTransactionIncomeService();
  res.status(status).json(message);
};


const getExpenseController = async (req, res) => {
  const { status, message } = await getTransactionExpenseService();
  res.status(status).json(message);
};


const deleteTransactionController = async (req, res) => {
  const {status, message } = await deleteTransactionService(req.params.id, req.user._id, req.user)
  res.status(status).json(message);
}


const getTransactionIncomeCategoriesController = async (req, res) => {

}


const getTransactionExpenseCategoriesController = async (req, res) => {

}

const getTransactionPeriodDataController = async (req, res) => {
  console.log(req.query);
  const {status, message } = await getTransactionPeriodDataService(req.query.date)
  res.status(status).json(message);
}

module.exports = {
  addIncomeController,
  addExpenseController,
  getIncomeController,
  getExpenseController,
  deleteTransactionController,
  getTransactionIncomeCategoriesController,
  getTransactionExpenseCategoriesController,
  getTransactionPeriodDataController
}