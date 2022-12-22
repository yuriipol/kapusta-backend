const { TransactionModel } = require('../../models/transaction');
const {getMonthStatistic} = require('../../helpers/getMonthStatistic')

const addTransactionExpenseService = async(data, user, owner) => {
  user.balance -= data.amount;
  await user.save();
  const newTransaction = await TransactionModel.create({...data, type: 'expense', owner})
  return {status: 200, message: {
    "newBalance": data.amount,
    "transaction": newTransaction
  }}
}

const addTransactionIncomeService = async(data, user, owner) => {
  user.balance += data.amount;
  await user.save();
  const newTransaction = await TransactionModel.create({...data, type: 'income', owner})
  return {status: 200, message: {
    "newBalance": data.amount,
    "transaction": newTransaction
  }}
}

const getTransactionIncomeService = async () => {
  const data = await TransactionModel.find({type: 'income'})
  const monthStats = getMonthStatistic(data);
  return {status: 200, message: {"incomes": data, monthStats}}
}

const getTransactionExpenseService = async () => {
  const data = await TransactionModel.find({type: 'expense'})
  const monthStats = getMonthStatistic(data);
  return {status: 200, message: {"expense": data, monthStats}}
}

const deleteTransactionService = async(_id, owner, user) => {
  const transaction = await TransactionModel.findByIdAndRemove({_id, owner}, {returnDocument: 'before'});
  if(transaction.type === 'income') user.balance -= transaction.amount, await user.save();
  if(transaction.type === 'expense') user.balance += transaction.amount, await user.save();
  return {status: 200, message: {"newBalance": user.balance}}
}

const getTransactionIncomeCategoriesService = async() => {
  
}

const getTransactionExpenseCategoriesService = async() => {

}

const getTransactionPeriodDataService = async (date) => {
  const transaction = await TransactionModel.find({date})
  return {status: 200, transaction}
}

module.exports = {
  addTransactionExpenseService,
  addTransactionIncomeService,
  getTransactionIncomeService,
  getTransactionExpenseService,
  deleteTransactionService,
  getTransactionIncomeCategoriesService,
  getTransactionExpenseCategoriesService,
  getTransactionPeriodDataService
}