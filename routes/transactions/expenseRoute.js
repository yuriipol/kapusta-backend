const express = require("express");
const {
  addExpenseController,
} = require("../../controllers/expense/expenseController");
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const authenticate = require("../../middlewares/authenticate");
const { Expense } = require("../../models/expenseModel");
const router = express.Router();

// router.use()
router.use(authenticate);
router.post(
  "/expense",
  [validateBody(Expense)],
  ctrlWrapper(addExpenseController)
);

module.exports = router;
