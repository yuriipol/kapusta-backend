const express = require("express");
const { 
  addIncomeController, 
  addExpenseController,
  getIncomeController,
  getExpenseController,
  deleteTransactionController
} = require("../../controllers/transaction/transactionController");
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const authenticate = require('../../middlewares/authenticate');
const { JoiTransactionExpense, JoiTransactionIncome } = require("../../models/transaction");
const router = express.Router();



// router.use()
router.use(authenticate)
router.post('/income',[validateBody(JoiTransactionIncome)], ctrlWrapper(addIncomeController))
router.get('/income', ctrlWrapper(getIncomeController))
router.post('/expense',[validateBody(JoiTransactionExpense)], ctrlWrapper(addExpenseController))
router.get('/expense', ctrlWrapper(getExpenseController))
router.delete('/:id', ctrlWrapper(deleteTransactionController))

module.exports = router