const display = document.querySelector("#display");
const displayText = document.createElement("p");
display.setAttribute("class", "display-text");
display.appendChild(displayText);

const digitsPanel = document.querySelector("#digits-panel");
const operandsPanel = document.querySelector("#operands-panel");
const buttons = document.querySelectorAll('button');

let displayValue = '0';
let firstDigit = null;
let secondDigit = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

function updateDisplay () {
    display.textContent = displayValue;
    if (displayValue.length > 10) {
        display.textContent = displayValue.substring(0, 10);
    }
}

updateDisplay();

function buttonBehavior () {
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('digits')) {
                inputDigit(button.value);
                updateDisplay();
            } else if (button.classList.contains('operators')) {
                inputOperator(button.value);
            } else if (button.classList.contains('equals')) {
                inputEquals();
                updateDisplay();
            } else if (button.classList.contains('decimal')) {
                inputDecimal(button.value);
                updateDisplay();
            } else if (button.classList.contains('clear')) {
                clearDisplay();
                updateDisplay();
            }
        })
    });
}

buttonBehavior();

function inputDigit(digit) {
    if (firstDigit === null) {
        if (displayValue === '0' || displayValue === 0){
            displayValue = digit;
        } else if (displayValue === firstDigit){
            displayValue = digit;
        } else {
            displayValue += digit;
        }
    } else {
        if (displayValue === firstDigit) {
            displayValue = digit;
        } else {
            displayValue += digit;
        }
    }
}

function inputOperator (operator) {
    if (firstOperator != null && secondOperator === null){
        secondOperator = operator;
        secondDigit = displayValue;
        result = operation(Number(firstDigit), Number(secondDigit), firstOperator);
        displayValue = round(result, 15).toString();
        firstDigit = displayValue;
        result = null;
    } else if (firstOperator != null && secondOperator != null) {
        secondDigit = displayValue;
        result = operation(Number(firstDigit), Number(secondDigit), secondOperator);
        displayValue = round(result, 15).toString();
        firstDigit = displayValue;
        result = null;
    } else {
        firstOperator = operator;
        firstDigit = displayValue;
    }
}

function inputEquals () {
    if (firstOperator === null) {
        displayValue = displayValue;
    } else if (secondOperator != null) {
        secondDigit = displayValue;
        result = operation(Number(firstDigit), Number(secondDigit), secondOperator);
        displayValue = round(result, 15).toString();
        firstDigit = displayValue;
        secondDigit = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    } else {
        secondDigit = displayValue;
        result = operation(Number(firstDigit), Number(secondDigit), firstOperator);
        displayValue = round(result, 15).toString();
        firstDigit = displayValue;
        secondDigit = null;
        firstOperator = null;
        secondOperator = null;
        result = null;
    }
}

function inputDecimal (decimal) {
    if (displayValue === firstDigit || displayValue === secondDigit) {
        displayValue = '0';
        displayValue += decimal;
    } else if (!displayValue.includes(decimal)){
        displayValue += decimal;
    }
}

function clearDisplay () {
    displayValue = '0';
    firstDigit = null;
    secondDigit = null;
    firstOperator = null;
    secondOperator = null;
    result = null;
}

function operation(firstNum, secondNum, operator) {
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
    lastResult = result
    result = 0;
    displayText.textContent = lastResult;
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

