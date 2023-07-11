
const para = document.querySelector('p');

para.addEventListener('click', updatename);

function updatename(){

    const name = prompt('Please enter your name ');

    para.textContent = `player 1:${name}`;
}