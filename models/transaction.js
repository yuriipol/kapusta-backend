const mongoose = require('mongoose');
const Joi = require("joi");




const Transaction = mongoose.Schema({
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date: {
    type: String,
  },
  category: {
    type: String,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  },
  type: {
    type: String,
  }
});

const TransactionModel = mongoose.model('transactions', Transaction);
['PRODUCTS', 'ALCOHOL', 'ENTERTAINMENT', 'HEALTH',
 'TRANSPORT', 'HOUSING', 'TECHNIQUE', 'COMMUNAL', 
 'COMMUNICATION', 'SPORTS, HOBBIES', 'EDUCATION', 'OTHER']

const JoiTransactionExpense = Joi.object({
  description: Joi.string().min(3).max(100).required(),
  amount: Joi.number().required(),
  date: Joi.date().max("now").required(),
  category: Joi.string()
    .valid(
      "PRODUCTS",
      "ALCOHOL",
      "ENTERTAINMENT",
      "HEALTH",
      "TRANSPORT",
      "HOUSING",
      "TECHNIQUE",
      "COMMUNAL, COMMUNICATION",
      "SPORTS, HOBBIES",
      "EDUCATION",
      "OTHER"
    )
    .min(3)
    .max(100)
    .required(),
});

const JoiTransactionIncome = Joi.object({
  description: Joi.string().min(3).max(100).required(),
  amount: Joi.number().required(),
  category: Joi.string()
  .valid(
    "SALARY",
    "INCOME",
  )
  .min(3)
  .max(100)
  .required(),
  date: Joi.date().max('now').required()
})

module.exports = {
  JoiTransactionExpense,
  JoiTransactionIncome,
  TransactionModel
}