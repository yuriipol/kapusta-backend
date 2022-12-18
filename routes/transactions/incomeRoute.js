const express = require("express");
const { addIncomeController } = require("../../controllers/income/incomeController");
const { ctrlWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const authenticate = require('../../middlewares/authenticate');
const { incomeSchema } = require("../../models/incomeModel");
const router = express.Router();

// router.use()
router.use(authenticate)
router.post('/income',[validateBody(incomeSchema)], ctrlWrapper(addIncomeController))


module.exports = router