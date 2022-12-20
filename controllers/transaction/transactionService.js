const { TransactionModel } = require('../../models/transaction');

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
  return {status: 200, message: data}
}

const getTransactionExpenseService = async () => {
  const data = await TransactionModel.find({type: 'expense'})
  return {status: 200, message: data}
}

const deleteTransactionService = async(_id, owner, user) => {
  const transaction = await TransactionModel.findByIdAndRemove({_id, owner}, {returnDocument: 'before'});
  if(transaction.type === 'income') user.balance -= transaction.amount, await user.save();
  if(transaction.type === 'expense') user.balance += transaction.amount, await user.save();
  return {status: 200, message: {"newBalance": user.balance}}
}

module.exports = {
  addTransactionExpenseService,
  addTransactionIncomeService,
  getTransactionIncomeService,
  getTransactionExpenseService,
  deleteTransactionService
}