const container = document.querySelector('#container');//reference container div

const para = document.createElement('p');//create p
para.classList.add('para');// add class to p
para.textContent = 'Hey I\'m red!'; //add text content to p

container.appendChild(para);// add to DOM and div

para.style.color = 'red'// change text color