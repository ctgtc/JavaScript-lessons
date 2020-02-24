 'use strict'

 let age = document.getElementById('age');

 function showUser(surname, name) {
     alert("Пользователь " + surname + " " + name + " " + this.value);
 }
 //showUser(showUser.apply(age, ['Jon', 'Smih']));
          showUser.apply(age, ["Горький","Максим"]);