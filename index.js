import {add , sub, multiply, div} from "./calculation.js";

const buttonPlus = document.getElementById("Plus")
buttonPlus.addEventListener("click",()=> add());

const buttonMinus = document.getElementById("Minus")
buttonMinus.addEventListener("click",()=> sub());

const buttonMulti = document.getElementById("Multi")
buttonMulti.addEventListener("click",()=> multiply());

const buttonDiv = document.getElementById("Div")
buttonDiv.addEventListener("click",()=> div());

// const operator = prompt("please select an operation", ["+ ,- ,* , /"]);

// function calculate(firstNumber, secondNumber, operator){
//     switch (operator) {
//         case "+": return add(firstNumber, secondNumber);
//         case "-": return sub(firstNumber, secondNumber);
//         case "*": return multiply(firstNumber, secondNumber);
//         case "/": return div(firstNumber, secondNumber);
//         default: throw new Error("wrong input");
//     }
// }

// alert(`The result is: ${calculate(firstNumber,secondNumber,operator)}`);

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

