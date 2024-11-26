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
buttons[11].textContent = 'AC';
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
let operand;
let numberArray = [];
let result;

function handleInput(input){

    if (input === 'AC'){
        inputArray = [];
        numberArray = [];
        displayText.textContent = inputArray.toString().replace(/,/g, '');
    } else if (symbols.includes(input) && input !== '='){
        numberArray.push(inputArray.toString().replace(/,/g, ''));
        if (numberArray.length === 2){
            calculation(operand);
            numberArray = [result];
        }
        operand = input;
        inputArray = [];
    } else if (input === '=') {
        numberArray.push(inputArray.toString().replace(/,/g, ''));
        calculation(operand);
    }else {
        endOfArray = false;
        inputArray.push(input);  
        displayText.textContent = inputArray.toString().replace(/,/g, '');
    } 
    
}

function calculation(operand) {
    if (!numberArray[1]){
        numberArray[1] = numberArray[0];
    }
    switch (operand) {
        case "+":
            result = parseFloat(numberArray[0]) + parseFloat(numberArray[1]);
            break;
        case "-":
            result = parseFloat(numberArray[0]) - parseFloat(numberArray[1]);
            break;
        case "*":
            result = parseFloat(numberArray[0]) * parseFloat(numberArray[1]);
            break;
        case "/":
            result = parseFloat(numberArray[0]) / parseFloat(numberArray[1]);
            break;
        default:
            alert("ERROR");
            break;
    }

    inputArray = [];
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

