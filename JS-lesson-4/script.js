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
    savings: true,
    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Daily budget: ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 1000) {
            console.log("Low income");
        } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
            console.log("Medium income");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High income");
        } else(console.log("Error!!!"));

    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплний?'),
                percent = +prompt('Под какой процент?');
            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита' + appData.monthIncome);

        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.expenses[i] = opt;
        }

    },
    ChooseIncome: function () {

        for (let i = 0; i < 1; i++) {

            let items = prompt('Что принесет дополнитльный доход? (перечислете через запятую)', '');
            if (typeof (items) != null && items != '' && typeof (items) === 'string') {
                appData.income = items.split(', ');
                appData.income.push(prompt('Мcожет что-то новое?'));
                appData.income.sort();

            } else {
                console.log("Вы ввели некорректные данные или не ввели их вовсе");
                i = i - 1;
            }
        }
        // вывести на экран сообщение "Способы доп. заработка: " и полученные способы
        appData.income.forEach(function (item, index, array) {
            console.log(`Index: ${index+1}, Elem: ${item}`);
        });
    }
};

for (let key in appData){
console.log(`Наша программа включает таки данные: ${appData[key]}`);}