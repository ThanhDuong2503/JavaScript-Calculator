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

if(operator == "+") {
    let result = add(firstNumber , secondNumber);
    alert("the result is " + result);
} else if (operator == "-") {
    let result = sub(firstNumber , secondNumber);
    alert("the result is " + result);
} else if (operator == "*") {
    let result = multiply(firstNumber , secondNumber);
    alert("the result is " + result);
} else if (operator == "/") {
    let result = div(firstNumber , secondNumber);
    alert("the result is " + result);
} else {
    alert("invalid input");
}

