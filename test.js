let parent = document.querySelector('.parent');

let container = document.createElement('div');
let name = document.createElement('h2');
let btn1 = document.createElement('button');
let btn2 = document.createElement('button');

container.className = 'container';
name.className = 'title';
btn1.className = 'btn1';
btn2.className = 'btn2';

name.textContent = 'Привычка'
btn1.textContent = 'Изменить'
btn2.textContent = 'Дата'

function add() {
    parent.append(container);
    container.append(name);
    name.after(btn1);
    btn1.after(btn2);
    
    localStorage.setItem('container', container.outerHTML.toString());
}

parent.innerHTML = localStorage.getItem('container');
