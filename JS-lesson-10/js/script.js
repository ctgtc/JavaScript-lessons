window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);



                    
                    break;
                }
            }

        }

    });
    //Timer
    let deadLine = '2020-02-16 ';

    function getTimeRemaining(endtime) { // ф-я
        let t = Date.parse(endtime) - Date.parse(new Date()), //рзница в датах
            seconds = Math.floor((t / 1000) % 60), //
            minutes = Math.floor((t / 1000 / 60) % 60), //
            hours = Math.floor((t / (1000 * 60 * 60))); //
        return {
            'total': t, // кол-во мил. секунд
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    // ф-я передающая значния в рстку
    function setClock(id, endtime) { //в endtime передается deadLine
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (hours.textContent < 10) {
                hours.textContent = '0' + t.hours;
            } else hours.textContent = t.hours;


            if (minutes.textContent < 10) {
                minutes.textContent = '0' + t.minutes;
            } else minutes.textContent = t.minutes;


            if (seconds.textContent < 10) {
                seconds.textContent = '0' + t.seconds;
            } else seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                document.querySelector('.hours').innerHTML = "00";
                document.querySelector('.minutes').innerHTML = "00";
                document.querySelector('.seconds').innerHTML = "00";
            }


        }
    }
    setClock('timer', deadLine);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        popupClose = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    popupClose.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    let descriptionBtn = document.querySelector('.description-btn');

    
    
        descriptionBtn.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    
    popupClose.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

});