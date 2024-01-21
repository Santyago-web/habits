'use strict'

let arrHabitsDiv = [],
    arrHabit = [], // массив привычек
    arrBtnRename = [], // массив кнопок переименования
    arrBtnDate = [], // массив кнопок установки даты
    arrDateTitle = [], // массив заголовка даты

    divHabitsPos = document.querySelector('.habits'), // позиция родителя контейнера привычек
    dateStartPos = document.querySelector('.start_date'); // позиция контейнера даты

function newHabit() {
    let divHabits = document.createElement('div'), // создание элемента контейнер привычек
        titleHabit = document.createElement('h2'), // создание элемента заголовок привычек
        btnRename = document.createElement('button'), // создание элемента кнопка изменения имени привычки
        btnCreateDate = document.createElement('button'); // создание элемента кнопка установки даты

    divHabits.className = 'habit'; // создание класса для контейнера привычек
    titleHabit.className = 'title_habit';
    btnRename.className = 'rename_habit';
    btnCreateDate.className = 'create_date';

    titleHabit.textContent = 'привычка';
    btnRename.textContent = 'Изменить';
    btnCreateDate.textContent = 'Установить дату';

    btnRename.setAttribute('onclick','changeTitle()' );
    btnCreateDate.setAttribute('onclick', 'startDate()');

    divHabitsPos.append(divHabits); // добавление контейнера привычек после родителя
    divHabits.append(titleHabit);
    titleHabit.after(btnRename);
    btnRename.after(btnCreateDate);

    arrHabit.push(titleHabit);
    arrBtnRename.push(btnRename);
    arrBtnDate.push(btnCreateDate);
    arrHabitsDiv.push(divHabits.outerHTML.toString());

    localStorage.setItem('habitsDiv', arrHabitsDiv.join(''));

    localStorage.setItem('habit1', arrHabit[0].textContent);
}

// функция установки даты
function startDate() {
    let dateTitle = document.createElement('h2'), // создание элемента заголовок даты начала
        inputStartDate = document.createElement('input'),
        btnPostDays = document.createElement('button'); // создание кнопки отправки даты

    dateTitle.className = 'date_title';
    inputStartDate.className = 'input_start_date';
    btnPostDays.className = 'post_days';

    dateTitle.textContent = 'Дата начала:'
    btnPostDays.textContent = 'ОК';

    inputStartDate.setAttribute('type', 'date');
    btnPostDays.setAttribute('onclick', 'postDays()');

    dateTitle.after(inputStartDate);
    inputStartDate.after(btnPostDays);
    dateStartPos.after(dateTitle);

    arrDateTitle.push(dateTitle);

    if (arrDateTitle.length > 0) {
        arrBtnDate[0].style.display = 'none';
    }
}

// функция отправки даты (при нажатии кнопки ОК)
function postDays() {
    let amountDaysValue = document.querySelector('.input_start_date').value, // значение введенной даты
        date = new Date(amountDaysValue), // перевод введенной информации в дату
        days = date.getTime(),
        dateNow = new Date(), // получение актуальной даты
        difDate = Math.floor((dateNow - days) / 86400000),
        amountDays = document.createElement('span'),
        amountDaysPos = document.querySelector('.amount_of_days_title'),
        postDaysBtn = document.querySelector('.post_days'),
        inputStartDate = document.querySelector('.input_start_date'),
        newStartDateTime = document.createElement('span'),
        dateTitlePos = document.querySelector('.date_title');

    amountDays.className = 'amount_days';
    newStartDateTime.className = 'new_start_date_time';

    amountDays.textContent = difDate.toString();
    newStartDateTime.textContent = amountDaysValue.toString();


    postDaysBtn.style.display = 'none'; // скрываем кнопку установки даты
    inputStartDate.style.display = 'none'; // скрываем input

    amountDaysPos.after(amountDays);
    dateTitlePos.after(newStartDateTime);
}


function title1() {
    arrHabit[0].textContent = prompt();
    localStorage.setItem('habit1', arrHabit[0].textContent);
}

function title2() {
    arrHabit[1].textContent = prompt();
    localStorage.setItem('habit2', arrHabit[1].textContent);
}

function title3() {
    arrHabit[2].textContent = prompt();
}

function title4() {
    arrHabit[3].textContent = prompt();
}

function title5() {
    arrHabit[4].textContent = prompt();
}

function title6() {
    arrHabit[5].textContent = prompt();
}

function title7() {
    arrHabit[6].textContent = prompt();
}

function title8() {
    arrHabit[7].textContent = prompt();
}

function title9() {
    arrHabit[8].textContent = prompt();
}

function title10() {
    arrHabit[9].textContent = prompt();
}

function changeTitle () {
    if (arrBtnRename[0]) {
        arrBtnRename[0].onclick = title1;
    }
    if (arrBtnRename[1]) {
        arrBtnRename[1].onclick = title2;
    }
    if (arrBtnRename[2]) {
        arrBtnRename[2].onclick = title3;
    }
    if (arrBtnRename[3]) {
        arrBtnRename[3].onclick = title4;
    }
    if (arrBtnRename[4]) {
        arrBtnRename[4].onclick = title5;
    }
    if (arrBtnRename[5]) {
        arrBtnRename[5].onclick = title6;
    }
    if (arrBtnRename[6]) {
        arrBtnRename[6].onclick = title7;
    }
    if (arrBtnRename[7]) {
        arrBtnRename[7].onclick = title8;
    }
    if (arrBtnRename[8]) {
        arrBtnRename[8].onclick = title9;
    }
    if (arrBtnRename[9]) {
        arrBtnRename[9].onclick = title10;
    }
}

window.changeTitle = changeTitle;
window.startDate = startDate;
window.postDays = postDays;

window.addEventListener('load', () => {

})



// divHabitsPos.innerHTML = localStorage.getItem('habitsDiv');

