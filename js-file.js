const container = document.querySelector('#container');//reference container div

const para = document.createElement('p');//create p
para.classList.add('para');// add class to p
para.textContent = 'Hey I\'m red!'; //add text content to p

container.appendChild(para);// add to DOM and div

para.style.color = 'red'// change text color



const blue = document.createElement('h3');//create h3
blue.classList.add('blue');// add class to h3
blue.textContent = 'I\'m a blue h3! '; //add text content to p

container.appendChild(blue);// add to DOM and div

blue.style.color = 'blue'// change text color