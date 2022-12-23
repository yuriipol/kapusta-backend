


const getMonthStatistic = (data) => {
  let tDecember = 0, tNovember = 0, tOctober = 0, tSeptember = 0, tAugust = 0, tJuly = 0, tJune = 0, tMay = 0, tApril = 0, tMarch = 0, tFebruary = 0, tJanuary = 0;
  for (let i of data) {
    const [year, month, date] = i.date.split('-');
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
['PRODUCTS', 'ALCOHOL', 'ENTERTAINMENT', 'HEALTH',
 'TRANSPORT', 'HOUSING', 'TECHNIQUE', 'COMMUNAL', 
 'COMMUNICATION', 'SPORTS, HOBBIES', 'EDUCATION', 'OTHER']


const getAllStatistic = (data) => {
  let totalInc = 0, totalExp = 0, totalSal = 0, totalIncCat = 0,
  PRODUCTS = 0, ALCOHOL = 0, ENTERTAINMENT = 0, HEALTH = 0, TRANSPORT = 0,
  HOUSING = 0, TECHNIQUE = 0, COMMUNAL = 0, COMMUNICATION = 0, SPORTS = 0,
  HOBBIES = 0, EDUCATION = 0, OTHER = 0
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
      if(i.type === 'PRODUCTS'){PRODUCTS += i.amount}
      if(i.type === 'ALCOHOL'){ALCOHOL += i.amount}
      if(i.type === 'ENTERTAINMENT'){ENTERTAINMENT += i.amount}
      if(i.type === 'HEALTH'){HEALTH += i.amount}
      if(i.type === 'TRANSPORT'){TRANSPORT += i.amount}
      if(i.type === 'HOUSING'){HOUSING += i.amount}
      if(i.type === 'TECHNIQUE'){TECHNIQUE += i.amount}
      if(i.type === 'COMMUNAL'){COMMUNAL += i.amount}
      if(i.type === 'COMMUNICATION'){COMMUNICATION += i.amount}
      if(i.type === 'SPORTS'){SPORTS += i.amount}
      if(i.type === 'HOBBIES'){HOBBIES += i.amount}
      if(i.type === 'EDUCATION'){EDUCATION += i.amount}
      if(i.type === 'OTHER'){OTHER += i.amount}
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
        'COMMUNAL': COMMUNAL ? COMMUNAL : 'N/A',
        'COMMUNICATION': COMMUNICATION ? COMMUNICATION : 'N/A',
        'SPORTS': SPORTS ? SPORTS : 'N/A',
        'HOBBIES': HOBBIES ? HOBBIES : 'N/A',
        'EDUCATION': EDUCATION ? EDUCATION : 'N/A',
        'OTHER': OTHER ? OTHER : 'N/A',
      }
    }
  }
}

module.exports = {
  getMonthStatistic,
  getAllStatistic
}