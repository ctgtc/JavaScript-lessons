"use strict";

let money = prompt('Ваш бюджет на месяц?', "");
let time = prompt('Введите дату в формате YYYY-MM-DD', "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    income: [],
    savings: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let b1 = prompt("Во сколько обойдется?", "");
let a2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let b2 = prompt("Во сколько обойдется?", "");
alert(appData.budget/30);
alert(appData.expenses.a1 = a2);
alert(appData.expenses.a3 = a4);
