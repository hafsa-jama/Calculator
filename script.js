// initalized three different variables to represent each part of the operation
let value1 = 0;
let value2 = 0;
let operator = '';

// functions to add, subtract, multiply, and divide two different values

function addNum(num1,num2) {
    return num1 + num2;
}

function subtractNum (num1,num2) {
    return num1 - num2;
}

function multiplyNum (num1, num2) {
    return num1 * num2;
}

function divideNum (num1,num2) {

    return num1 / num2;
}



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

// DOM elements
const display = document.getElementById('display');
const numButtons = document.getElementsByClassName('number');
const operatorsList = document.getElementsByClassName('operator');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');
const negativePositive = document.getElementById('toggle-negative');
const backspaceButton = document.getElementById('back-button');


// adding event listeners // 
clearButton.addEventListener("click", clearCalculator);
negativePositive.addEventListener("click",toggleNegative);
backspaceButton.addEventListener("click", backSpace);

// iterates through each number on calculator and calls displayValue() function 
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", displayValue)
}

// iterates through each number on calculator and calls displayValue() function 
for (let i = 0; i < operatorsList.length; i++) {
    operatorsList[i].addEventListener("click", operatorClick)
}

equalButton.addEventListener("click", function() { 
    value2 = parseFloat(display.textContent); 
    let result = operate(value1, value2, operator); 
    display.textContent = result; 
    value1 = result;
});


// functions //
function displayValue()
{
    if (event.target.textContent === '.' && display.textContent.includes('.')) { 
        
        return;
    }
        
    if (display.textContent === '0' && event.target.textContent !== '.')
    {
        display.textContent = event.target.textContent;
    } else {
        display.textContent += event.target.textContent;
    }
    
}

function operatorClick() {

    value1 = parseFloat(display.textContent);
    operator = event.target.value;
    display.textContent = '0'; // clear display for the next number input

}

function clearCalculator() {
    value1 = 0;
    value2 = 0;
    operator = 0;
    display.textContent = '0';

}

function toggleNegative() {

    if (display.textContent !== '0') {
        display.textContent(parseFloat(display.textContent) * -1).toString();
    }

}

function backSpace() {
    let currentDisplay = display.textContent;
    if (currentDisplay.length > 1) {
        display.textContent = currentDisplay.substring(0, currentDisplay.length - 1);
    } else {
        display.textContent = '0'; // Reset to '0' if the display is empty
    }
}

