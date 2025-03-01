// CLOSURES 
function outer() {
    let counter = 4;
    return function () {
        counter++;
        return counter;
    }
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());


console.log(typeof increment)           
    //here typeof == function == becuase value returned is function  

// inner function and local variable "counter" are bound together, this is called closure.
// counter retains memory after execution, hence - 5,6,7,8.


// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives a function access to its outer scope