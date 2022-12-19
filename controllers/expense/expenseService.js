const { Expense } = require('../../models/expenseModel');

const addExpenseService = async(data, user, owner) => {
  user.balance -= data.amount;
  await user.save();
  const newTransaction = await Expense.create({...data, owner})
  return {status: 200, message: {
    "newBalance": data.amount,
    "transaction": newTransaction
  }}
}

module.exports ={
  addExpenseService
}