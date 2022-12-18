const {IncomeModel} = require('../../models/incomeModel')

const addIncomeService = async(data, user, owner) => {
  user.balance += data.amount;
  await user.save();
  const newTransaction = await IncomeModel.create({...data, owner})
  return {status: 200, message: {
    "newBalance": data.amount,
    "transaction": newTransaction
  }}
}

module.exports ={
  addIncomeService
}