function newHabit() {
    let habits = document.querySelector('.habits');
    let div = document.createElement('div');
    div.className = 'habit';
    div.innerHTML = 'контейнер';
    habits.appendChild(div);

    let habit = document.getElementsByClassName('habit');
    let btnRename = document.createElement('button');
    btnRename.setAttribute('onclick', 'renameHabit()');
    btnRename.className = 'rename_habit';
    btnRename.setAttribute('id', '1');

    btnRename.innerHTML = 'Изменить';
    habit[habit.length - 1].after(btnRename);
}

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




/*function renameHabit() {
    let habit = document.getElementsByClassName('habit');
    let btnRename = document.getElementsByClassName('rename_habit');
    let btn1 = document.getElementsByClassName('rename_habit')[0];
    let btn2 = document.getElementsByClassName('rename_habit')[1];
    let btn3 = document.getElementsByClassName('rename_habit')[2];
    let btn4 = document.getElementsByClassName('rename_habit')[3];
    let btn5 = document.getElementsByClassName('rename_habit')[4];
    let btn6 = document.getElementsByClassName('rename_habit')[5];
    let btn7 = document.getElementsByClassName('rename_habit')[6];
    let btn8 = document.getElementsByClassName('rename_habit')[7];
    let btn9 = document.getElementsByClassName('rename_habit')[8];
    let btn10 = document.getElementsByClassName('rename_habit')[9];

    let habit1 = document.getElementsByClassName('habit')[0];
    let habit2 = document.getElementsByClassName('habit')[1];
    let habit3 = document.getElementsByClassName('habit')[2];
    let habit4 = document.getElementsByClassName('habit')[3];
    let habit5 = document.getElementsByClassName('habit')[4];
    let habit6 = document.getElementsByClassName('habit')[5];
    let habit7 = document.getElementsByClassName('habit')[6];
    let habit8 = document.getElementsByClassName('habit')[7];
    let habit9 = document.getElementsByClassName('habit')[8];
    let habit10 = document.getElementsByClassName('habit')[9];
    

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
    })
}*/


