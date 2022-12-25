const {Schema, SchemaTypes, model} = require('mongoose');
const Joi = require("joi");
const {incCategories, expCategories} = require('../helpers/categories')

const Transaction = Schema({
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
    type: SchemaTypes.ObjectId,
    ref: 'user',
  },
  type: {
    type: String,
  }
});

const TransactionModel = model('transactions', Transaction);

const JoiTransactionExpense = Joi.object({
  description: Joi.string().min(3).max(100).required(),
  amount: Joi.number().required(),
  date: Joi.date().max("now").required(),
  category: Joi.string()
    .valid(
      expCategories.PRODUCTS,
      expCategories.ALCOHOL,
      expCategories.ENTERTAINMENT,
      expCategories.HEALTH,
      expCategories.TRANSPORT,
      expCategories.FOR_HOME,
      expCategories.TECHNICS,
      expCategories.UTILITIES,
      expCategories.SPORT_AND_HOBBY,
      expCategories.EDUCATION,
      expCategories.OTHER
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
    incCategories.SALARY,
    incCategories.ADDITIONAL_INCOME
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