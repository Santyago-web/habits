'use strict'

let btnAddHabit = document.querySelector('.add_habit'),
    habit1 = document.querySelector('.habit1'),
    habit2 = document.querySelector('.habit2'),
    habit3 = document.querySelector('.habit3'),
    habit4 = document.querySelector('.habit4'),
    habit5 = document.querySelector('.habit5');

let habitTitle1 = document.querySelector('.habit_title1'),
    habitTitle2 = document.querySelector('.habit_title2'),
    habitTitle3 = document.querySelector('.habit_title3'),
    habitTitle4 = document.querySelector('.habit_title4'),
    habitTitle5 = document.querySelector('.habit_title5');

let btnChange1 = document.querySelector('.change_name1'),
    btnChange2 = document.querySelector('.change_name2'),
    btnChange3 = document.querySelector('.change_name3'),
    btnChange4 = document.querySelector('.change_name4'),
    btnChange5 = document.querySelector('.change_name5');

let habitBox1 = document.querySelector('.habit_box1'),
    habitBox2 = document.querySelector('.habit_box2'),
    habitBox3 = document.querySelector('.habit_box3'),
    habitBox4 = document.querySelector('.habit_box4'),
    habitBox5 = document.querySelector('.habit_box5');

let attr = (elem) => {
    return elem.getAttribute('id');
}

/*
btnAddHabit.addEventListener('click', () => {
    habit1.setAttribute('id', 'habit1');
    if (attr(habit1)) {
        habit2.setAttribute('id', 'habit2')
    }
    if (attr(habit2)) {
        habit3.setAttribute('id', 'habit3')
    }
    if (attr(habit3)) {
        habit3.setAttribute('id', 'habit4')
    }
    if (attr(habit4)) {
        habit3.setAttribute('id', 'habit5')
    }
})*/

habit1.addEventListener('click', () => {
    habitBox1.setAttribute('id', 'habit_box1')
    habitBox2.removeAttribute('id');
    habitBox3.removeAttribute('id');
    habitBox4.removeAttribute('id');
    habitBox5.removeAttribute('id');
})

habit2.addEventListener('click', () => {
    habitBox2.setAttribute('id', 'habit_box1')
    habitBox1.removeAttribute('id');
    habitBox3.removeAttribute('id');
    habitBox4.removeAttribute('id');
    habitBox5.removeAttribute('id');
})

habit3.addEventListener('click', () => {
    habitBox3.setAttribute('id', 'habit_box1')
    habitBox2.removeAttribute('id');
    habitBox1.removeAttribute('id');
    habitBox4.removeAttribute('id');
    habitBox5.removeAttribute('id');
})

habit4.addEventListener('click', () => {
    habitBox4.setAttribute('id', 'habit_box1')
    habitBox2.removeAttribute('id');
    habitBox3.removeAttribute('id');
    habitBox1.removeAttribute('id');
    habitBox5.removeAttribute('id');
})

habit5.addEventListener('click', () => {
    habitBox5.setAttribute('id', 'habit_box1')
    habitBox2.removeAttribute('id');
    habitBox3.removeAttribute('id');
    habitBox4.removeAttribute('id');
    habitBox1.removeAttribute('id');
})

btnChange1.addEventListener('click', () => {
    habitTitle1.textContent = prompt();
    localStorage.setItem('habitTitle1', habitTitle1.textContent);
    
    habit2.removeAttribute('id');
    btnChange1.textContent = 'Изменить';
})

btnChange2.addEventListener('click', () => {
    habitTitle2.textContent = prompt();
    localStorage.setItem('habitTitle2', habitTitle2.textContent);

    habit3.removeAttribute('id');
    btnChange2.textContent = 'Изменить';
})

btnChange3.addEventListener('click', () => {
    habitTitle3.textContent = prompt();
    localStorage.setItem('habitTitle3', habitTitle3.textContent);

    habit4.removeAttribute('id');
    btnChange3.textContent = 'Изменить';
})

btnChange4.addEventListener('click', () => {
    habitTitle4.textContent = prompt();
    localStorage.setItem('habitTitle4', habitTitle4.textContent);

    habit5.removeAttribute('id');
    btnChange4.textContent = 'Изменить';
})

btnChange5.addEventListener('click', () => {
    habitTitle5.textContent = prompt();
    localStorage.setItem('habitTitle5', habitTitle5.textContent);
    
    btnChange5.textContent = 'Изменить';
})

habitTitle1.textContent = localStorage.getItem('habitTitle1');
habitTitle2.textContent = localStorage.getItem('habitTitle2');
habitTitle3.textContent = localStorage.getItem('habitTitle3');
habitTitle4.textContent = localStorage.getItem('habitTitle4');
habitTitle5.textContent = localStorage.getItem('habitTitle5');