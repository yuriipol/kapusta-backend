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
  const newTransaction = await TransactionModel.create({...data, category: "income", owner})
  return {status: 200, message: {
    "newBalance": data.amount,
    "transaction": newTransaction
  }}
}

const getTransactionIncomeService = async () => {
  // const data = await TransactionModel.find({})
}

const getTransactionExpenseService = async () => {
  
}

const deleteTransactionService = async(_id, owner, user) => {
  const transaction = await TransactionModel.findByIdAndRemove({_id, owner}, {returnDocument: 'before'});
  console.log(transaction.amount)
  if(transaction.category === 'income'){
    console.log('here')
    user.balance -= transaction.amount;
    await user.save();
  }
  if(transaction.category !== 'income'){
    console.log('there')
    user.balance += transaction.amount;
    await user.save();
  }
  return {status: 200, message: {"newBalance": user.balance}}
}


module.exports = {
  addTransactionExpenseService,
  addTransactionIncomeService,
  getTransactionIncomeService,
  getTransactionExpenseService,
  deleteTransactionService
}