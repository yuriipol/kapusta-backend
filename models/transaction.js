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
  }
});

const TransactionModel = mongoose.model('transactions', Transaction);


const expenseAddSchema = Joi.object({
  description: Joi.string().min(3).max(100).required(),
  amount: Joi.number().required(),
  date: Joi.date().max("now").required(),
  category: Joi.string()
    .valid(
      "Продукты",
      "Алкоголь",
      "Развлечения",
      "Здоровье",
      "Транспорт",
      "Всё для дома",
      "Техника",
      "Коммуналка и связь",
      "Спорт и хобби",
      "Образование",
      "Прочее"
    )
    .min(6)
    .max(100)
    .required(),
});

const incomeSchema = Joi.object({
  description: Joi.string().min(3).max(100).required(),
  amount: Joi.number().required(),
  date: Joi.date().max('now').required()
})

module.exports = {
  incomeSchema,
  expenseAddSchema,
  TransactionModel
}