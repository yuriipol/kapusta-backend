const express = require("express");
const { addIncome } = require("../../controllers/income/income");
const { ctrlWrapper } = require("../../helpers");
const router = express.Router();


router.post('/income',[], ctrlWrapper(addIncome))


module.exports = router