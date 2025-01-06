/* 
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like `"Making green tea"` when called with `"green tea"`. 
Store the result in a variable named `teaOrder`.
*/

function makeTea(typeofTea) {        //parameter
  return `Making ${typeofTea}`;
}
let teaOrder = makeTea("green tea"); // argument
// console.log(teaOrder);  


/* 
2. Create a function named `orderTea` that takes one parameter, `teaType`. Inside this function, create another function named `confirmOrder` that returns a message like `"Order confirmed for chai"`. 
Call `confirmOrder` from within `orderTea` and return the result.
*/

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for ${teaType}`;
  }
  return confirmOrder();
}
let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

//READ ABOUT JS EXECUTION CONTEXT

/* 
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`. 
Store the result in a variable named `totalCost`.
*/

//Explcit return - for multiline function
// const calculateTotal = (price, quantity) => {
//   return price * quantity;
// }
// let totalCost = calculateTotal(499, 100);
// console.log();

//Impicit return - for single line function

const calculateTotal = (price, quantity) => price * quantity;
let totalCost = calculateTotal(499, 100);
// console.log(totalCost);

/*
4. Write a function named `processTeaOrder` that takes another function, `makeTea`, as a parameter and calls it with the argument `"earl grey"`.
Return the result of calling `makeTea`.
*/
//Higher order function  or First class function -- when a function is passed as a parameter by another function or returned by another function

function makeTea(teaType) { //teaType => 'earl gray'
  return `tea is ${teaType}`
};

function processTeaOrder(teaFunction) {    //teaFunction => makeTea()
  return teaFunction('earl gray');              // after return from makeTea() - `tea is earl gray`
};
let value = processTeaOrder(makeTea);    //after return from processTeaOrder() - `tea is earl gray `
// console.log(value);


/*
5. Write a function named `createTeaMaker` that returns another function. The returned function should take one parameter, `teaType`, and return a message like `"Making green tea"`.
Store the returned function in a variable named `teaMaker` and call it with `"green tea"`.
*/ //NESTED FUNCTION OR FUNCTION WITHIN FUNCTION

function createTeaMaker(name) {
  let time = 'evening';
  return function (teaType) {
    return `${name} is making ${teaType} in ${time}`;
  }
};

let teaMaker = createTeaMaker("Vaibhav");
//here teaMaker = function(){   }, because createTeaMaker returns a function
let result = teaMaker('green tea');        //executing teaMaker
console.log(result);

// READ ABOUT CLOSURES

//note: 'this' sets the context of block of code
//analogy - influencer(my fans have come) | electrician(my fans have come)  
//this can be used for both normal and arrow function but has less functionality for arrow function hence not used 