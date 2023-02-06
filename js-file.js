const container = document.querySelector('#container');//reference container div

const para = document.createElement('p');//create p
para.classList.add('para');// add class to p
para.textContent = 'Hey I\'m red!'; //add text content to p
para.style.color = 'red'// change text color
container.appendChild(para);// add to DOM and div



const blue = document.createElement('h3');//create h3
blue.classList.add('blue');// add class to h3
blue.textContent = 'I\'m a blue h3! '; //add text content to h3
blue.style.color = 'blue'// change text colo
container.appendChild(blue);// add to DOM and div




const container2 = document.createElement('div');//create new div
container2.classList.add('container2');//add class 'container2' to div
container2.setAttribute('style', 'border:black solid 10px; background: pink;');  //add bg color and border

const header1 = document.createElement('h1');//create h1 
header1.classList.add('header1')// add class header1 to h1
header1.textContent = 'I\'m in a div!'// add text to h1
container2.appendChild(header1);// add h1 to div.container2

const para2 = document.createElement('p');//create p element
para2.classList.add('para2');// add class para2 to p element
para2.textContent='ME TOO!';//add text to para2
container2.appendChild(para2)// add para2 to container2




container.appendChild(container2); //add all div.container2 to .container




const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert("Hello World");
});


function alertFunction() {
    alert("YAY! YOU DID IT!");
  }
  


  btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });