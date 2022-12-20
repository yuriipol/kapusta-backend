const { TransactionModel } = require('../../models/transaction');

const addTransactionExpenseService = async(data, user, owner) => {
  user.balance -= data.amount;
  await user.save();
  const newTransaction = await TransactionModel.create({...data, owner})
  return {status: 200, message: {
    "newBalance": data.amount,
    "transaction": newTransaction
  }}
}


const addTransactionIncomeService = async(data, user, owner) => {
  user.balance += data.amount;
  await user.save();
  const newTransaction = await TransactionModel.create({...data, owner})
  return {status: 200, message: {
    "newBalance": data.amount,
    "transaction": newTransaction
  }}
}

module.exports = {
  addTransactionExpenseService,
  addTransactionIncomeService
}