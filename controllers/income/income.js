

const addIncome = (req, res, next) => {
  const {description, amount, date} = req.params;
  const user = req.user;
  
}


module.exports = {
  addIncome
}