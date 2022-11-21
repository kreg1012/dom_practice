const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'this is the glorious textContent';

container.appendChild(content);

const p = document.createElement('p');
p.classList.add('p');
p.style.color = "red";
p.textContent = "im a red P";

content.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('h3');
h3.style.color = "blue";
h3.textContent = "im a blue h3";

content.appendChild(h3);

const innerContainer = document.createElement('div');
innerContainer.style.cssText = "border: 1 solid black; background-color: pink;";

let innerContH1 = document.createElement('h1');
innerContH1.textContent = "I'm in a DIV";

let innerContP = document.createElement('p');
innerContP.textContent = "ME TOO!";

innerContainer.appendChild(innerContH1);
innerContainer.appendChild(innerContP);
container.appendChild(innerContainer);

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id != 2) alert('you lose');  //loose comparsion bc button id is a string not an integer. 
        else if (button.id == 2) alert('you win');
    });
    
});

