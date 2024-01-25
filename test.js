'use strict'

let btnAddHabit = document.querySelector('.add_habit'),
    habit1 = document.querySelector('.habit1'),
    habit2 = document.querySelector('.habit2'),
    habit3 = document.querySelector('.habit3'),
    habit4 = document.querySelector('.habit4'),
    habit5 = document.querySelector('.habit5');

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