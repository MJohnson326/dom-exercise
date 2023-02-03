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




const container2 = document.createElement('div');
container2.classList.add('container2');
container2.setAttribute('style', 'border:black solid 10px; background: pink;');  
container2.textContent='akjhd;fkgahd;ghd'
container.appendChild(container2);
