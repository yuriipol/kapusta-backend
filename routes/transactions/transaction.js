const express = require("express");
const { addIncomeController, addExpenseController } = require("../../controllers/transaction/transactionController");
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const authenticate = require('../../middlewares/authenticate');
const { JoiTransactionExpense, JoiTransactionIncome } = require("../../models/transaction");
const router = express.Router();

// router.use()
router.use(authenticate)
router.post('/income',[validateBody(JoiTransactionIncome)], ctrlWrapper(addIncomeController))
router.post('/expense',[validateBody(JoiTransactionExpense)], ctrlWrapper(addExpenseController))


module.exports = router