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
    type: Date.prototype.getTime()
  },
  owner: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user',
  }
});

const IncomeModel = mongoose.model('income', Income);

module.exports = {
  IncomeModel
}