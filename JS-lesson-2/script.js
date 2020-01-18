"use strict";

let money = +prompt('Ваш бюджет на месяц?', "");
let time = prompt('Введите дату в формате YYYY-MM-DD', "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 1; i < 3; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b !== '' && a.length < 10) {
        console.log("Ok");
        appData.expenses[a] = b;
    } else {
        a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        appData.expenses[a] = b;
    }

};


/* let i = 1;
while (i < 3) {

    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b !== '' && a.length < 10) {
        console.log("Ok");
        appData.expenses[a] = b;
    } else {
        a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        appData.expenses[a] = b;
    }

}; */


/* let i = 1; 
do {
     
    i++;
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b !== '' && a.length < 10) {
        console.log("Ok");
        appData.expenses[a] = b;
    } else {
        a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        appData.expenses[a] = b;
    }

} while(i<3); */

appData.moneyPerDay = appData.budget / 30;

alert('Daily budget: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
    console.log("Low income");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log("Medium income");
} else if (appData.moneyPerDay > 2000) {
    console.log("High income");
} else(console.log("Error!!!"));