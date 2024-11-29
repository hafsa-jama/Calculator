// functions to add, subtract, multiply, and divide two different values

function addNum(a,b) {
    return a + b;
}

function subtractNum (a,b) {
    return a - b;
}

function multiplyNum (a, b) {
    return a * b;
}

function divideNum (a,b) {

    return a / b;
}

let num1 = 10;
let num2 = 10;

let sum = addNum(num1, num2);
let difference = subtractNum(num1, num2);
let product = multiplyNum(num1, num2);
let quotient = divideNum(num1, num2);

console.log("Sum of given numbers is: ", sum);
console.log("Difference of two numbers is: ", difference);
console.log("Product of two numbers is: ", product);
console.log("Quotient of two numbers is", quotient);

// initalized three different variables to represent each part of the operation
let value1 = 0;
let value2 = 0;
let operator = 0;


// function that takes an operator and two numbers and then calls one of the above functions on the numbers
function operate(value1, value2, operator) {

    switch(operator) {
        case '+':
            return addNum(value1, value2);
        case '-':
            return subtractNum(value1, value2);
        case '*':
            return multiplyNum(value1, value2);
        case '/':
            return divideNum(value1, value2);
    }
    
}

const display = document.getElementById('display');
const numButtons = document.getElementsByClassName('number');
const operatorsList = document.getElementsByClassName('operator');
const clearButton = document.getElementById('clear');


clearButton.addEventListener("click", clearCalculator);

// iterates through each number on calculator and calls displayValue() function 
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", displayValue)
}

// iterates through each number on calculator and calls displayValue() function 
for (let i = 0; i < operatorsList.length; i++) {
    operatorsList[i].addEventListener("click", operatorClick)
}

function displayValue()
{
    if (display.textContent === '0')
    {
        display.textContent = event.target.textContent;
    } else {
        display.textContent += event.target.textContent;
    }
    
}

function operatorClick() {

}

function clearCalculator() {
    value1 = 0;
    value2 = 0;
    operator = 0;
    display.textContent = 0

}