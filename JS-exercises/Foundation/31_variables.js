/*
Perform the following mathematical operations
on the provided variables a and b

Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder
*/


// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    let result = a + b;
    return result;
}
console.log(add());

// Subtract small value from larger one
function subtract() {
    let result = b - a;
    return result;
}
console.log(subtract());

function multiply() {
    let result = a * b;
    return result;
}
console.log(multiply());

// Divide larger value by small
function divide() {
    let result = b / a;
    return result;
}
console.log(divide())

// Increase value of a by 1
function increment() {
    let result = a;
    result++;
    return result;
}
console.log(increment());

// Decrease value of b by 1
function decrement() {
    let result = b;
    result--;
    return result;
}
console.log(decrement())

// Divide larger value by small to find the reminder
function reminder() {
    let result = b % a;
    return result;
}
console.log(reminder());
