
/*
1. Write a function squareNumbers(arr) using map() and arrow functions
*/
// NON WRAPPED -- Explicit return
// const squareNumbers = (arr) => {
//    return arr.map((num) => {
//        return num * num;
//     })
// };
// let arr = [1,2,3,4];
// console.log(squareNumbers(arr))



// WRAPPED -- Implicit return
const squareNumbers = (arr) => arr.map((num) => num * num)      
// .map() is performed on each array element                                          
// output of map() function is an array                        
let firstArray = [1, 2, 3, 4];
console.log("Squares = ",squareNumbers(firstArray));

/*
2. Create a function filterEvenNumbers(arr) using filter() and arrow functions
*/
const filterEvenNumbers = (arr) => arr.filter((num) => num%2 === 0)
let secondArray = [1,2,3,4,5,6,7,8,9];
console.log("Even Numbers = ",filterEvenNumbers(secondArray));

/*
3. Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions
*/
const sumPositiveNumbers = (arr) => {
    
} 


/*
4. Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions
*/


/*
5. Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function
*/

