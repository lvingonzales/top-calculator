const display = document.querySelector("#display");
const displayText = document.createElement("p");
displayText.setAttribute("class", "display-text");
displayText.textContent = 'TEST';
display.appendChild(displayText);


const digitsPanel = document.querySelector("#digits-panel");
let buttons = new Array(10);

// Quickly creates the basic 0-9 digits
for (let i =0; i < buttons.length; i++){
    buttons[i] = document.createElement("button");
    buttons[i].setAttribute("class", "buttons digits")
    buttons[i].textContent = i;
    digitsPanel.appendChild(buttons[i]);
}

// Adds the period and backspace key
buttons.push(document.createElement("button"));
buttons[10].setAttribute("class", "buttons digits");
buttons[10].textContent = '.';
digitsPanel.appendChild(buttons[10]);

buttons.push(document.createElement("button"));
buttons[11].setAttribute("class", "buttons digits");
buttons[11].textContent = '<-';
digitsPanel.appendChild(buttons[11]);

let input;
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () =>{
        input = buttons[i].textContent;
        handleInput(input);
    })
}


const operandsPanel = document.querySelector("#operands-panel");


let inputArray = [];
let equation;
let operandArray;
let numberArray;
let result;

function handleInput(input){

    inputArray.push(input);

    console.log(inputArray);


    // equation = equation.split("");

    // numberArray = equation.filter((x) => x >= 0);
    // operandArray = equation.filter((x) => x === '+' || x === '-' || x === '*' || x === '/');

    // for (let i = 0; i < operandArray.length; i++){
    //     switch (operandArray[i]){
    //         case '+':
    //             addFunc();
    //             break;
    //         case '-':
    //             subtractFunc();
    //             break;
    //         case '*':
    //             multiplyFunc();
    //             break;
    //         case '/':
    //             divideFunc();
    //             break;
    //         default:
    //             alert("ERROR");
    //             break;
    //     }
    // }
}

function addFunc () {
    result = parseInt(numberArray[0]) + parseInt(numberArray[1]);
    numberArray.splice(0, 2, result);
    return console.log (result);
}

function subtractFunc() {
    result = parseInt(numberArray[0]) - parseInt(numberArray[1]);
    numberArray.splice(0, 2, result);
    return console.log (result);
}

function multiplyFunc(){
    result = parseInt(numberArray[0]) * parseInt(numberArray[1]);
    numberArray.splice(0, 2, result);
    return console.log (result);
}

function divideFunc() {
    result = parseInt(numberArray[0]) / parseInt(numberArray[1]);
    numberArray.splice(0, 2, result);
    return console.log (result);
}

