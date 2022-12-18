const { Schema, model, SchemaTypes } = require("mongoose");
const Joi = require("joi");

const expenseSchema = new Schema({
  description: {
    type: String,
    default: "Expense description",
  },
  amount: {
    type: Number,
  },
  date: {
    type: String,
  },
  category: {
    type: String,
    enum: [
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
      "Прочее",
    ],
  },
  owner: {
    type: SchemaTypes.ObjectId,
    ref: "user",
  },
});

const Expense = model("expense", expenseSchema);

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

module.exports = {
  Expense,
  expenseAddSchema,
};
