const divEl = document.createElement('div');
const pEl = document.createElement('p');
divEl.appendChild(pEl);
document.body.appendChild(divEl);
pEl.textContent = 'Hello World';
pEl.style.color = 'red';

console.log('script.js');
const title1 = document.getElementById('title');
console.log(title1);

const title2 = document.querySelector('#title');
console.log(title2);

const con1 = document.getElementsByClassName('container');
console.log(con1);

const con2 = document.querySelectorAll('.container');
console.log(con2);
