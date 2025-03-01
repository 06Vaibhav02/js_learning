// Prefix and Postfix Operations 
// Although both forms increase the variable by 1, there is a difference. The Postfix Form returns the original value of the variable, before the increment/decrement The Prefix Form returns the value after the increment/decrement. This difference can be seen if we are using the returned value of the increment/decrement.

let a = 10;
console.log(a++)

let b = 10;
console.log(++b)

/*
let a = 10;     //10
a++ //10 
console.log(a) //11

let b = 10;     //10
++b //11
console.log(++b) //11
*/


