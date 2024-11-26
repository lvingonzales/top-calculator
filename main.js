const display = document.querySelector("#display");
const displayText = document.createElement("p");
displayText.setAttribute("class", "display-text");
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


const operandsPanel = document.querySelector("#operands-panel");


let symbols = ['+','-','*','/','='];
let operandButtons = [];
for (let i = 0; i < symbols.length; i++){
    operandButtons[i] = document.createElement("button");
    operandButtons[i].setAttribute("class", "buttons operands")
    operandButtons[i].textContent = symbols[i];
    operandsPanel.appendChild(operandButtons[i]);
    operandButtons[i].addEventListener("click", () =>{
        input = operandButtons[i].textContent;
        handleInput(input);
    })
}

let input;
for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () =>{
        input = buttons[i].textContent;
        handleInput(input);
    })
}

let inputArray = [];
let newNum;
let equation;
let operandArray = [];
let displayArray = [];
let numberArray = [];
let result;
let endOfArray = false;

function handleInput(input){

    if (input === '<-'){
        inputArray.pop();
        displayText.textContent = inputArray.toString().replace(/,/g, '');
    } else if (input === '=') {
        console.log ("= pressed");
        operandArray = inputArray.filter ((x) => symbols.includes(x));

        while (!endOfArray) {
            let operandIndex = inputArray.findIndex((x) => symbols.includes(x))
            sortInputArray(operandIndex);
        }
        calculation();
    } else {
        endOfArray = false;
        inputArray.push(input); 
        displayText.textContent = inputArray.toString().replace(/,/g, '');
    } 
}

function sortInputArray(operandIndex) {
    for (let i = 0; i < inputArray.length; i++) {
        if (i === operandIndex) {
            break;
        }
        if (!newNum && newNum !== 0) {
            newNum = inputArray[i];
        } else {
            newNum = newNum + inputArray[i];
        }
    }

    if (operandIndex === -1) {
        inputArray = [];
        endOfArray = true;
    } else {
        inputArray.splice(0, (operandIndex + 1));
    }

    numberArray.push(newNum);

    newNum = null;
}

function calculation() {

    for (let i = 0; i < operandArray.length; i++) {
        if (!numberArray[1]){
            numberArray[1] = 0;
        } else if (!numberArray[0]){
            numberArray[0] = 0;
        }

        switch (operandArray[i]) {
            case '+':
                result = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
                break;
            case '-':
                result = parseFloat(numberArray[0]) - parseFloat(numberArray[1]);
                break;
            case '*':
                result = parseFloat(numberArray[0]) * parseFloat(numberArray[1]);
                break;
            case '/':
                result = parseFloat(numberArray[0]) / parseFloat(numberArray[1]);
                break;
            default:
                alert("ERROR");
                break;
        }

        numberArray.splice(0, 2, result);
    }

    numberArray = [];
    operandArray = [];
    calculated = true;
    displayText.textContent = result;
}

function addFunc () {
    if (!numberArray[1]){
        numberArray[1] = 0;
    }
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

