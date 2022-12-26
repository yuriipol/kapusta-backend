const {months} = require('./month')

const getMonthlyStatistics = (data) => {
  let monthStat = {};
  for (let i = 1; i <= 12; i++) {
    let total = 0;
    const month = months[i - 1];
    const transactions = data.filter((transaction) => {
      let transactionMonth = transaction.date.split('-')[1]
      let transactionYear = transaction.date.split('-')[0]
      if(Number(transactionMonth) === i && Number(transactionYear) === new Date().getFullYear() ){
        return true;
      }
      return false;
    })
    if(!transactions.length){
      monthStat[month] = "N/A";
      continue;
    }
    for (let transaction of transactions) {
      total += transaction.amount
    }
    monthStat[month] = total;
  }
  return monthStat;
}


const getAllTransactionsStatisticsByDate = (data) => {
  let incomesData = {}, expensesData = {};
  let incomeTotal = 0, expenseTotal = 0;
  const incomes = data.filter((transaction) => {
    if(transaction.type === 'income'){
      return true
    }
    return false
  })
  if(incomes){
    for(let i = 0; i < incomes.length; i++ ){
      const category = incomes[i].category;
      const description = incomes[i].description;
      if(!incomesData[category]){
        incomesData[category] = {
          total: incomes[i].amount,
          [description]: incomes[i].amount
        }
        incomeTotal += incomes[i].amount
        continue;
      }
      if(incomesData[category] && !incomesData[category][description]){
        incomesData[category].total += incomes[i].amount;
        incomesData[category][description] = incomes[i].amount;
        incomeTotal += incomes[i].amount;
        continue;
      }
      if(incomesData[category] && incomesData[category][description]){
        incomesData[category].total += incomes[i].amount;
        incomesData[category][description] += incomes[i].amount;
        incomeTotal += incomes[i].amount;
      }
    }
  }
  const expense = data.filter((transaction) => {
    if(transaction.type === 'expense'){
      return true;
    }
    return false;
  })
  if(expense){
    for(let i = 0; i < expense.length; i++){
      const category = expense[i].category;
      const description = expense[i].description;
      if(!expensesData[category]){
        expensesData[category] = {
          total: expense[i].amount,
          description: expense[i].amount
        }
        expenseTotal += expense[i].amount
        continue;
      }
      if(expensesData[category] && !expensesData[category][description]){
        expensesData[category].total += expense[i].amount;
        expensesData[category][description] = expense[i].amount;
        expenseTotal += expense[i].amount;
        continue;
      }
      if(expensesData[category] && expensesData[category][description]){
        expensesData[category].total += expense[i].amount;
        expensesData[category][description] += expense[i].amount;
        expenseTotal += expense[i].amount;
      }
    }
  }
  return {
    incomes: {incomeTotal, incomesData},
    expense: {expenseTotal, expensesData}
  }
}

const getNewDate = (date) => {
  const [year, month, day] = date.split('-');
  let lowDate, highDate;
  if(year){
    lowDate = `${year}-01-01`
    highDate = `${year}-12-31`
    if(month){
      lowDate = `${date}-01`
      highDate = `${date}-31`
      if(day){
        lowDate = date;
        highDate = date;
      }
    }
  }
  return {lowDate, highDate}
}

module.exports = {
  getMonthlyStatistics,
  getAllTransactionsStatisticsByDate,
  getNewDate
}