
//let test = prompt("enter an equation");

let equation;
let operandArray;
let numberArray;
let result;

equation = prompt("enter an equation");
handleInput();

function handleInput(){

    equation = equation.split("");

    numberArray = equation.filter((x) => x >= 0);
    operandArray = equation.filter((x) => x === '+' || x === '-' || x === '*' || x === '/');

    for (let i = 0; i < operandArray.length; i++){
        switch (operandArray[i]){
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

