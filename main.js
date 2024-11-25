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


const operandsPanel = document.querySelector("#operands-panel");

// buttons.push(document.createElement("button"));
// buttons[12].setAttribute("class", "buttons operands");
// buttons[12].textContent = '+';
// operandsPanel.appendChild(buttons[12]);

// buttons.push(document.createElement("button"));
// buttons[13].setAttribute("class", "buttons operands");
// buttons[13].textContent = '-';
// operandsPanel.appendChild(buttons[13]);

// buttons.push(document.createElement("button"));
// buttons[14].setAttribute("class", "buttons operands");
// buttons[14].textContent = '*';
// operandsPanel.appendChild(buttons[14]);

// buttons.push(document.createElement("button"));
// buttons[15].setAttribute("class", "buttons operands");
// buttons[15].textContent = '/';
// operandsPanel.appendChild(buttons[15]);

// buttons.push(document.createElement("button"));
// buttons[16].setAttribute("class", "buttons operands equal");
// buttons[16].textContent = '=';
// operandsPanel.appendChild(buttons[16]);
// buttons[16].addEventListener("click", () =>{
//     calculation(inputArray);
// })

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

function handleInput(input){

    displayArray.push(input);

    if (symbols.includes(input) && input !== '='){
        newNum = inputArray.toString().replace(/,/g, '');
        numberArray.push(newNum);
        inputArray.splice(0, inputArray.length);
        operandArray.push(input);
    } else if (input === '='){
        newNum = inputArray.toString().replace(/,/g, '');
        numberArray.push(newNum);
        inputArray.splice(0, inputArray.length);
        calculation();
    } else {
        inputArray.push(input);
    }

    displayText.textContent = displayArray.toString().replace(/,/g, '');
}

function calculation() {

    for (let i = 0; i < operandArray.length; i++) {
        switch (operandArray[i]) {
            case '+':
                addFunc();
                break;
            case '-':
                subtractFunc();
                break;
            case '*':
                multiplyFunc();
                break;
            case '/':
                divideFunc();
                break;
            default:
                alert("ERROR");
                break;
        }
    }

    displayText.textContent = result;
    displayArray.splice(0, displayArray.length, result);
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

