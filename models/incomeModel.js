const mongoose = require('mongoose');
const Joi = require("joi");


const Income = mongoose.Schema({
  description: {
    type: String,
  },
  amount: {
    type: Number,
  },
  date: {
    type: String,
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  }
});

const IncomeModel = mongoose.model('income', Income);

const incomeSchema = Joi.object({
  description: Joi.string().min(3).max(100).required(),
  amount: Joi.number().required(),
  date: Joi.date().max('now').required()
})

module.exports = {
  IncomeModel,
  incomeSchema
}