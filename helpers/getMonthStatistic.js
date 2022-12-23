const getMonthStatistic = (data) => {
  let tDecember = 0, tNovember = 0, tOctober = 0, tSeptember = 0, tAugust = 0, tJuly = 0, tJune = 0, tMay = 0, tApril = 0, tMarch = 0, tFebruary = 0, tJanuary = 0;
  for (let i of data) {
    const [year, month, date] = i.date.split('-');
    if(month === '12') tDecember += i.amount
    if(month === '11') tNovember += i.amount
    if(month === '10') tOctober += i.amount
    if(month === '09') tSeptember += i.amount
    if(month === '08') tAugust += i.amount
    if(month === '07') tJuly += i.amount
    if(month === '06') tJune += i.amount
    if(month === '05') tMay += i.amount
    if(month === '04') tApril += i.amount
    if(month === '03') tMarch += i.amount
    if(month === '02') tFebruary += i.amount
    if(month === '01') tJanuary += i.amount
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
  let totalInc = 0, totalExp = 0, totalSal = 0, totalIncCat = 0,
  PRODUCTS = 0, ALCOHOL = 0, ENTERTAINMENT = 0, HEALTH = 0, TRANSPORT = 0,
  HOUSING = 0, TECHNIQUE = 0, COMMUNAL = 0, SPORTS = 0, EDUCATION = 0, OTHER = 0
  for (let i of data) {
    if(i.type === 'income') {
      totalInc += i.amount
      if(i.category === 'SALARY'){
        totalSal += i.amount
      }
      if(i.category === 'INCOME'){
        totalIncCat += i.amount
      }
    }
    if(i.type === 'expense') {
      totalExp += i.amount;
      if(i.category === 'PRODUCTS') PRODUCTS += i.amount
      if(i.category === 'ALCOHOL') ALCOHOL += i.amount
      if(i.category === 'ENTERTAINMENT') ENTERTAINMENT += i.amount
      if(i.category === 'HEALTH') HEALTH += i.amount
      if(i.category === 'TRANSPORT') TRANSPORT += i.amount
      if(i.category === 'HOUSING') HOUSING += i.amount
      if(i.category === 'TECHNIQUE') TECHNIQUE += i.amount
      if(i.category === 'COMMUNAL, COMMUNICATION') COMMUNAL += i.amount
      if(i.category === 'SPORTS, HOBBIES') SPORTS += i.amount
      if(i.category === 'EDUCATION') EDUCATION += i.amount
      if(i.category === 'OTHER') OTHER += i.amount
    }
  }
  return {
    "incomes": {
      total: totalInc,
      "incomesData": {
        'SALARY': totalSal,
        'INCOME': totalIncCat
      }
    },
    "expenses": {
      total: totalExp,
      "incomesData": {
        'PRODUCTS': PRODUCTS ? PRODUCTS : 'N/A',
        'ALCOHOL': ALCOHOL ? ALCOHOL : 'N/A',
        'ENTERTAINMENT': ENTERTAINMENT ? ENTERTAINMENT : 'N/A',
        'HEALTH': HEALTH ? HEALTH : 'N/A',
        'TRANSPORT': TRANSPORT ? TRANSPORT : 'N/A',
        'HOUSING': HOUSING ? HOUSING : 'N/A',
        'TECHNIQUE': TECHNIQUE ? TECHNIQUE : 'N/A',
        'COMMUNAL, COMMUNICATION': COMMUNAL ? COMMUNAL : 'N/A',
        'SPORTS, HOBBIES': SPORTS ? SPORTS : 'N/A',
        'EDUCATION': EDUCATION ? EDUCATION : 'N/A',
        'OTHER': OTHER ? OTHER : 'N/A',
      }
    }
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
  getMonthStatistic,
  getAllStatistic,
  getNewDate
}