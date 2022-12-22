


const getMonthStatistic = (data) => {
  let tDecember = 0, tNovember = 0, tOctober = 0, tSeptember = 0, tAugust = 0, tJuly = 0, tJune = 0, tMay = 0, tApril = 0, tMarch = 0, tFebruary = 0, tJanuary = 0;
  for (let i of data) {
    const [year, month, date] = i.date.split('-');v
    if(month === '12'){
      tDecember += i.amount;
    }
    if(month === '11'){
      tNovember += i.amount;
    }
    if(month === '10'){
      tOctober += i.amount;
    }
    if(month === '09'){
      tSeptember += i.amount;
    }
    if(month === '08'){
      tAugust += i.amount;
    }
    if(month === '07'){
      tJuly += i.amount;
    }
    if(month === '06'){
      tJune += i.amount;
    }
    if(month === '05'){
      tMay += i.amount;
    }
    if(month === '04'){
      tApril += i.amount;
    }
    if(month === '03'){
      tMarch += i.amount;
    }
    if(month === '02'){
      tFebruary += i.amount
    }
    if(month === '01'){
      tJanuary += i.amount
    }
  }
  return {
    "Январь": tJanuary ? tJanuary : "N/A",
    "Февраль": tFebruary ? tFebruary : "N/A",
    "Март": tMarch ? tMarch : "N/A",
    "Апрель": tApril ? tApril : "N/A",
    "Май": tMay ? tMay : "N/A",
    "Июнь": tJune ? tJune : "N/A",
    "Июль": tJuly ? tJuly : "N/A",
    "Август": tAugust ? tAugust : "N/A",
    "Сентябрь": tSeptember ? tSeptember : "N/A",
    "Октябрь": tOctober ? tOctober : "N/A",
    "Ноябрь": tNovember ? tNovember : "N/A",
    "Декабрь": tDecember ? tDecember : "N/A"
  }
}

const getAllStatistic = (data) => {
  let totalInc = 0, totalExp = 0
  for (let i of data) {
    if(i.type === 'income') {
      totalInc += i.amount
    }
    if(i.type === 'expense') {
      totalExp += i.amount
    }
  }
  return {
    "incomes": {
      total: totalInc,
      "incomesData": {

      }
    },
    "expenses": {
      total: totalExp,
      "incomesData": {
        
      }
    }
  }
}

module.exports = {
  getMonthStatistic,
  getAllStatistic
}