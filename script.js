function newHabit() {
    let habitPos = document.querySelector('.habits');
    let div = document.createElement('div');
    div.className = 'habit';
    div.innerHTML = prompt()
    habitPos.appendChild(div);
}

