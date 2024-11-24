const display = document.querySelector("#display");
const digitsPanel = document.querySelector("#digits-panel");
const operandsPanel = document.querySelector("#operands-panel");

let buttons = new Array(10);

for (let i =0; i < buttons.length; i++){
    buttons[i] = document.createElement("button");
    buttons[i].setAttribute("class", "buttons digits")
    buttons[i].textContent = i;
    digitsPanel.appendChild(buttons[i]);
}

buttons.push(document.createElement("button"));
buttons[10].setAttribute("class", "buttons digits");
buttons[10].textContent = '.';
digitsPanel.appendChild(buttons[10]);

buttons.push(document.createElement("button"));
buttons[11].setAttribute("class", "buttons digits");
buttons[11].textContent = '<-';
digitsPanel.appendChild(buttons[11]);
