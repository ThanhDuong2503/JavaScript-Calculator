let firstNumber = Number(prompt("please enter your first number", "5"));
let secondNumber = Number(prompt("please enter your second number", "10"));
let operator = prompt("please select an operation", ["+ ,- ,* , /"]);

// let result;

// if(operator == "+") {
//     result = firstNumber + secondNumber;
// } else if (operator == "-") {
//     result = firstNumber - secondNumber;
// } else if (operator == "*") {
//     result = firstNumber * secondNumber;
// } else if (operator == "/") {
//     result = firstNumber / secondNumber;
// } else {
//     result="invalid";
// }
//
// alert("the result is " + result);

function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;
}
function sub(firstNumber, secondNumber){
    return firstNumber - secondNumber;
}
function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;
}
function div(firstNumber, secondNumber){
    return firstNumber / secondNumber;
}


function calculate(firstNumber, secondNumber, operator) {
    let result;
    if (operator == "+") {
        result = add(firstNumber, secondNumber);

    } else if (operator == "-") {
        result = sub(firstNumber, secondNumber);

    } else if (operator == "*") {
        result = multiply(firstNumber, secondNumber);

    } else if (operator == "/") {
        result = div(firstNumber, secondNumber);

    } else {
        alert("invalid input");
    }
    return result;
}

alert("the result is " + calculate(firstNumber,secondNumber, operator));

