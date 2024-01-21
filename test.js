'use strict'

let parent = document.querySelector('.parent');
    



document.querySelector('.new').onclick = add;

function add() {
    let container = document.createElement('div'),
        name = document.createElement('h2'),
        btn1 = document.createElement('button'),
        btn2 = document.createElement('button');
    
    container.className = 'container';
    name.className = 'title';
    btn1.className = 'btn1';
    btn2.className = 'btn2';

    name.textContent = prompt('Название',)
    btn1.textContent = 'Изменить'
    btn2.textContent = 'Дата'
    
    parent.append(container);
    container.append(name);
    name.after(btn1);
    btn1.after(btn2);


    localStorage.setItem('parent', parent.outerHTML.toString());
}

parent.innerHTML = localStorage.getItem('parent');
