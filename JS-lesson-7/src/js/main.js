'use strict';
/*  document.getElementsByTagName('button')[0].disabled = false,
 document.getElementsByTagName('button')[1].disabled = false,
 document.getElementsByTagName('button')[2].disabled = false; 
 
 
 
     expensesItemBtn = document.getElementsByTagName('button')[0].disabled = true,
 optionalexpensesBtn = document.getElementsByTagName('button')[1].disabled = true,
 countBudgetBtn = document.getElementsByTagName('button')[2].disabled = true,*/
let startBtn = document.getElementById('start'),

    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    yearValue = document.getElementsByClassName('year-value')[0],
    monthValue = document.getElementsByClassName('month-value')[0],
    dayValue = document.getElementsByClassName('day-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),

    expensesItemBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBudgetBtn = document.getElementsByTagName('button')[2],

    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),

    optionalExpenses = document.querySelector('optionalexpenses-value'),

    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('.checksavings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    year = document.querySelector('.year'),
    month = document.querySelector('.month'),
    day = document.querySelector('.day');



"use strict";
let money, time;
expensesItemBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;
startBtn.addEventListener('click', function () {

    time = prompt('Введите дату в формате YYYY-MM-DD', "");
    money = +prompt('Ваш бюджет на месяц?', "");

    while (isNaN(money) || money == "" || money == null) { //проверка на то что данные от пользователя это число, запрет отмены
        money = +prompt('Ваш бюджет на месяц?', "");
    }
    appData.budget = money; //запись в глобалый объект appData
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(); //запись данных в поле

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();


    expensesItemBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function () {

    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value, //наименование
            b = expensesItem[++i].value; // цена

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b !== '' && a.length < 10) {
            console.log("Ok");
            appData.expenses[a] = b; // запись в глобпльный обЪект !ключ - значние
            sum += +b; // сума всех значений
        } else {
            i = i - 1;
        }

    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalexpensesItem.length; i++) {
        let opt = optionalexpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }

});

countBudgetBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value, //наименование
            b = expensesItem[++i].value; // цена

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b !== '' && a.length < 10) {
            console.log("Ok");
            appData.expenses[a] = b; // запись в глобпльный обЪект !ключ - значние
            sum += +b; // сума всех значений
        } else {
            i = i - 1;
        }

    }

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - sum) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 1000) {
            levelValue.textContent = "Low income";
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Medium income";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "High income";
        } else levelValue.textContent = "Error!!!";
    } else {
        daybudgetValue.textContent = "Error!!!";
    }
});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});
percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);

    }
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};