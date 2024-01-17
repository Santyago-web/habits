let arrHabit = []; // массив привычек
let arrBtnRename = []; // массив кнопок переименования
let arrBtnDate = []; // массив кнопок установки даты
let arrDateTitle = []; // массив заголовка даты

function newHabit() {
    let divHabitsPos = document.querySelector('.habits'); // позиция родителя контейнера привычек
    let divHabits = document.createElement('div'); // создание элемента контейнер привычек
    divHabits.className = 'habit'; // создание класса для контейнера привычек
    divHabitsPos.append(divHabits); // добавление контейнера привычек после родителя

    let titleHabit = document.createElement('h2'); // создание элемента заголовок привычек
    titleHabit.className = 'title_habit';
    titleHabit.textContent = 'привычка';
    divHabits.append(titleHabit);
    arrHabit.push(titleHabit);

    let btnRename = document.createElement('button'); // создание элемента кнопка изменения имени привычки
    btnRename.setAttribute('onclick','changeTitle()' );
    btnRename.className = 'rename_habit';
    btnRename.textContent = 'Изменить';
    divHabits.after(btnRename);
    arrBtnRename.push(btnRename);

    let btnCreateDate = document.createElement('button'); // создание элемента кнопка установки даты
    btnCreateDate.setAttribute('onclick', 'startDate()');
    btnCreateDate.className = 'create_date';
    btnCreateDate.textContent = 'Установить дату';
    btnRename.after(btnCreateDate);
    arrBtnDate.push(btnCreateDate);



}

// функция установки даты
function startDate() {
    let dateStartPos = document.querySelector('.start_date'); // позиция контейнера даты
    let dateTitle = document.createElement('h2'); // создание элемента заголовок даты начала
    dateTitle.className = 'date_title';
    dateTitle.textContent = 'Дата начала:'
    dateStartPos.after(dateTitle);
    arrDateTitle.push(dateTitle);
    if (arrDateTitle.length > 0) {
        arrBtnDate[0].style.display = 'none';
    }

    let inputStartDate = document.createElement('input');
    inputStartDate.setAttribute('type', 'date');
    inputStartDate.className = 'input_start_date';
    dateTitle.after(inputStartDate);

    let btnPostDays = document.createElement('button'); // создание кнопки отправки даты
    btnPostDays.setAttribute('onclick', 'postDays()');
    btnPostDays.className = 'post_days';
    btnPostDays.textContent = 'ОК';
    inputStartDate.after(btnPostDays);
}

// функция отправки даты (при нажатии кнопки ОК)
function postDays() {
    let amountDaysValue = document.querySelector('.input_start_date').value; // значение введенной даты
    let date = new Date(amountDaysValue); // перевод введенной информации в дату
    let days = date.getTime();
    let dateNow = new Date(); // получение актуальной даты
    let difDate = Math.floor((dateNow - days) / 86400000);
    let amountDays = document.createElement('span');
    amountDays.className = 'amount_days';
    amountDays.textContent = difDate.toString();
    let amountDaysPos = document.querySelector('.amount_of_days_title');
    amountDaysPos.after(amountDays);
    let postDaysBtn = document.querySelector('.post_days');
    postDaysBtn.style.display = 'none'; // скрываем кнопку установки даты

    let inputStartDate = document.querySelector('.input_start_date');
    inputStartDate.style.display = 'none'; // скрываем input

    let newStartDateTime = document.createElement('span');
    newStartDateTime.className = 'new_start_date_time';
    newStartDateTime.textContent = amountDaysValue.toString();
    let dateTitlePos = document.querySelector('.date_title');
    dateTitlePos.after(newStartDateTime);
}


function title1() {
    arrHabit[0].textContent = prompt();
}

function title2() {
    arrHabit[1].textContent = prompt();
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
        arrBtnRename[0].addEventListener('click', title1)
    }
    if (arrBtnRename[1]) {
        arrBtnRename[1].addEventListener('click', title2)
    }
    if (arrBtnRename[2]) {
        arrBtnRename[2].addEventListener('click', title3)
    }
    if (arrBtnRename[3]) {
        arrBtnRename[3].addEventListener('click', title4)
    }
    if (arrBtnRename[4]) {
        arrBtnRename[4].addEventListener('click', title5)
    }
    if (arrBtnRename[5]) {
        arrBtnRename[5].addEventListener('click', title6)
    }
    if (arrBtnRename[6]) {
        arrBtnRename[6].addEventListener('click', title7)
    }
    if (arrBtnRename[7]) {
        arrBtnRename[7].addEventListener('click', title8)
    }
    if (arrBtnRename[8]) {
        arrBtnRename[8].addEventListener('click', title9)
    }
    if (arrBtnRename[9]) {
        arrBtnRename[9].addEventListener('click', title10)
    }
}



window.changeTitle = changeTitle;
window.startDate = startDate;
window.postDays = postDays;


/*if (arrBtnRename) {
    arrBtnRename[0].addEventListener('click', function () {
        arrHabit[0].textContent = '1';
    })
}*/

/*window.addEventListener('DOMContentLoader', (event) => {

})*/

/*window.onload = function () {
    arrBtnRename[0].addEventListener('click', function () {
        arrHabit[0].textContent = '1';
    })
}*/

/*let listHabits = document.querySelectorAll('.habit');

for (let habit of listHabits) {
    containerInit(habit);
}

function containerInit(habit) {
    let title = habit.querySelector('.title_habit');
    let button = habit.querySelector('.rename_habit')

    button.addEventListener('click', (e) => title.innerHTML = prompt())
}*/

/*function findId() {
    let btnRename = document.getElementById('1')
    btnRename.addEventListener('click', function () {
        let id = this.getElementsByClassName('rename_habit').length;
        console.log(id);
    })
}
function f() {
    let btnRename = document.getElementsByClassName('rename_habit');
    btnRename.addEventListener('click', function () {
        let arrHabit = Array.from(btnRename);
        console.log(arrHabit.indexOf());
    })
}*/





    /*let btn1 = document.getElementsByClassName('rename_habit')[0];
    let btn2 = document.getElementsByClassName('rename_habit')[1];
    let btn3 = document.getElementsByClassName('rename_habit')[2];
    let btn4 = document.getElementsByClassName('rename_habit')[3];
    let btn5 = document.getElementsByClassName('rename_habit')[4];
    let btn6 = document.getElementsByClassName('rename_habit')[5];
    let btn7 = document.getElementsByClassName('rename_habit')[6];
    let btn8 = document.getElementsByClassName('rename_habit')[7];
    let btn9 = document.getElementsByClassName('rename_habit')[8];
    let btn10 = document.getElementsByClassName('rename_habit')[9];

    let habit1 = document.getElementsByClassName('title_habit')[0];
    let habit2 = document.getElementsByClassName('title_habit')[1];
    let habit3 = document.getElementsByClassName('title_habit')[2];
    let habit4 = document.getElementsByClassName('title_habit')[3];
    let habit5 = document.getElementsByClassName('title_habit')[4];
    let habit6 = document.getElementsByClassName('title_habit')[5];
    let habit7 = document.getElementsByClassName('title_habit')[6];
    let habit8 = document.getElementsByClassName('title_habit')[7];
    let habit9 = document.getElementsByClassName('title_habit')[8];
    let habit10 = document.getElementsByClassName('title_habit')[9];
    

    btn1.addEventListener('click', function () {
        habit1.innerHTML = prompt();
    })

    btn2.addEventListener('click', function () {
        habit2.innerHTML = prompt();
    })

    btn3.addEventListener('click', function () {
        habit3.innerHTML = prompt();
    })

    btn4.addEventListener('click', function () {
        habit4.innerHTML = prompt();
    })

    btn5.addEventListener('click', function () {
        habit5.innerHTML = prompt();
    })

    btn6.addEventListener('click', function () {
        habit6.innerHTML = prompt();
    })
    btn7.addEventListener('click', function () {
        habit7.innerHTML = prompt();
    })
    btn8.addEventListener('click', function () {
        habit8.innerHTML = prompt();
    })
    btn9.addEventListener('click', function () {
        habit9.innerHTML = prompt();
    })
    btn10.addEventListener('click', function () {
        habit10.innerHTML = prompt();
    })*/

