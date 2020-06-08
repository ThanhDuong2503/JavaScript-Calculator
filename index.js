let firstNumber = Number(prompt("please enter your first number", "5"));
let secondNumber = Number(prompt("please enter your second number", "10"));
let operator = prompt("please select an operation", ["+ ,- ,* , /"]);
let result;

if(operator == "+") {
    result = firstNumber + secondNumber;
} else if (operator == "-") {
    result = firstNumber - secondNumber;
} else if (operator == "*") {
    result = firstNumber * secondNumber;
} else if (operator == "/") {
    result = firstNumber / secondNumber;
} else {
    result="invalid";
}

alert("the result is " + result);
