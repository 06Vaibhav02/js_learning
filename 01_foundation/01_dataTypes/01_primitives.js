//1. NUMBER
let score = 120;
// console.log(typeof score);

//Note: Every Primitive data can be converted to Non-Primitive
let myNumber = new Number(6) //Number() is a constructor and we are creating instance/object of that
//console.log(typeof myNumber); // object 
//here myNumber has non-primitive datatype
//not recommended

//2. BOOLEAN
let isActive = false;
// console.log(typeof isActive); //boolean

let isReallyActive = new Boolean(false) //not recommended
// console.log(typeof isReallyActive);  //object

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

console.log(sm1 === sm2); //false

