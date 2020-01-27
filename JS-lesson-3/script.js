"use strict";
let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', "");
    time = prompt('Введите дату в формате YYYY-MM-DD', "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', "");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 1; i < 3; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");
        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b !== '' && a.length < 10) {
            console.log("Ok");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }

    }

}
chooseExpenses();


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

 

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Daily budget: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 1000) {
        console.log("Low income");
    } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
        console.log("Medium income");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High income");
    } else(console.log("Error!!!"));
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплний?'),
            percent = +prompt('Под какой процент?');
        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита' + appData.monthIncome);

    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i < 3; i++) {
        let opt = prompt("Статья необязательных расходов?", "");       
                appData.expenses[i]=opt;
            }  

    }

chooseOptExpenses();