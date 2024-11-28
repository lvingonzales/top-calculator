const display = document.querySelector("#display");
display.setAttribute("class", "display-text");

const digitsPanel = document.querySelector("#digits-panel");
const operandsPanel = document.querySelector("#operands-panel");
const buttons = document.querySelectorAll('button');

let displayValue = '0';
let firstDigit = null;
let secondDigit = null;
let firstOperator = null;
let secondOperator = null;
let result = null;

window.addEventListener('keydown', (e) => {
    const key = document.querySelector(`button[data-key='${e.keyCode}']`);
    key.click();
})

function updateDisplay () {
    display.innerText = displayValue;
    if (displayValue.length > 10) {
        display.innerText = displayValue.substring(0, 10);
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
                updateDisplay();
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
    switch (operator) {
        case "+":
            return firstNum + secondNum;
        case "-":
            return firstNum - secondNum;
        case "*":
            return firstNum * secondNum;
        case "/":
            if (secondNum === 0) {
                return 'ERROR'
            } else {
                return firstNum / secondNum;
            }
        default:
            alert("ERROR");
            break;
    }
}

function round (number, places){
    return parseFloat(Math.round(number + 'e' + places) + 'e-' + places);
}

