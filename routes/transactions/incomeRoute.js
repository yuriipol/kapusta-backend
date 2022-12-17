const express = require("express");
const { addIncomeController } = require("../../controllers/income/incomeController");
const { ctrlWrapper } = require("../../helpers");
const authenticate = require('../../middlewares/authenticate')
const router = express.Router();

// router.use()
router.use(authenticate)
router.post('/income',[], ctrlWrapper(addIncomeController))


module.exports = router