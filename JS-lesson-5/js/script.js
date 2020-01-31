'use srict'


//let btn = document.body.appendChild(li);
let li = document.createElement("li"),
    menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName('menu-item'),
    body = document.getElementsByTagName('body'),
    adv = document.querySelector('.adv'),
    title = document.getElementById('title'),
    prompt1 = document.querySelector("#prompt");

li.classList.add("menu-item");
li.innerHTML = "Пятий пункт";
menu.appendChild(li);

menu.insertBefore(menuItem[2], menuItem[1]);

document.body.style.backgroundImage = "url('../img/apple_true.jpg')";

//let text = document.createTextNode('подлинную');
title.textContent = 'Мы продаем только подлинную технику Apple';
adv.remove();
//adv.removeChild(adv.firstChild);

let userQestions = prompt('Какое ваше отношение к яблочной продукции?');
prompt1.textContent = userQestions;



/* 
'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add("menu-item");                          // Добавляем новый li, с классом и текстом
menuItemLi.textContent = "Пятый элемент";                       
menu.appendChild(menuItemLi);                                   


document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple"    // Заменить текст

adv.remove();                                                   // Удалить рекламу со страницы

let yourOpinion = prompt("Ваше отношение к технике Apple?");   // Отношение к технике Apple
promptforApple.textContent = yourOpinion; */