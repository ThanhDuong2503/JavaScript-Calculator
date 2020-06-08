const firstNumber = Number(prompt("please enter your first number"));
const secondNumber = Number(prompt("please enter your second number"));
// const operator = prompt("please select an operation", ["+ ,- ,* , /"]);

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
let result;
function add(){
    result = firstNumber + secondNumber;
    alert(`the result is : ${result}`);
}
function sub(){
    result = firstNumber - secondNumber;
    alert(`the result is : ${result}`);
}
function multiply(){
    result = firstNumber * secondNumber;
    alert(`the result is : ${result}`);
}
function div(){
    result = firstNumber / secondNumber;
    alert(`the result is : ${result}`);
}

// function calculate(firstNumber, secondNumber, operator) {
//
//     if (operator == "+") {
//         return add(firstNumber, secondNumber);
//
//     } else if (operator == "-") {
//         return sub(firstNumber, secondNumber);
//
//     } else if (operator == "*") {
//         return multiply(firstNumber, secondNumber);
//
//     } else if (operator == "/") {
//         return div(firstNumber, secondNumber);
//
//     } else {
//         alert("invalid input");
//     }
// }
//
// // alert("the result is " + calculate(firstNumber,secondNumber, operator));
// // andere Schreibweise:
// alert(`the result is ${calculate(firstNumber,secondNumber,operator)}`);

