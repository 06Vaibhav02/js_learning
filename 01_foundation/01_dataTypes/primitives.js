//1. NUMBER

let score = 120;
let newScore = new Number(); //not recommended

// console.log(typeof score);
// console.log(typeof newScore);
//Note: Every Primitive data can be converted to Non-Primitive

//2. BOOLEAN

let isActive = false;
let isReallyActive = new Boolean(false) //not recommended
// console.log(typeof isActive);
// console.log(typeof isReallyActive);

//3./4. NULL and UNDEFINED  

let myName; //undefined -- variable declared but value not assigned
// let myName = undefined;
// console.log(myName);

let yourName = null; //Null -- variable declared and value assigned empty/null
// console.log(yourName);

//5. STRING

let userName = "Vaibhav";

// Old Method - to print string
let oldGreet = "Hello" + " " + userName;
console.log(oldGreet);

//New Method - to print string
let newGreet = `Hello ${userName}`   //string interpolation
console.log(newGreet);

let demoOne = `Value is ${2 * 6}`;  //inside ${} is computation
console.log(demoOne);

//6. SYMBOL - generate unique value

let sm1 = Symbol("Vaibhav");
let sm2 = Symbol("Vaibhav");

console.log(sm1 == sm2);