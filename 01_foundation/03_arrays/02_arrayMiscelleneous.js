//Reversing Array
let mainArray = [1, 2, 3, 4, 5];
let reverseArray = mainArray.reverse();
// console.log(reverseArray); // [5,4,3,2,1]


//What is indexOf given item.
let arr = [1, 2, 3, 4];
// console.log(arr.indexOf(3)); //2


//Shift and unshift

let array = [1, 2, 3, 4]
array.unshift(0)
// console.log(array)

array.shift()
// console.log(array)


//SLICE VS SPLICE -- IMPORTANT FOR INTERVIEW
let array1 = [0, 1, 2, 3, 4, 5]
console.log("OG: ", array1)//original array

//Slice
const slice = array1.slice(1, 3) //3 not included
console.log("Sliced: ", slice)
console.log("OG array after slice: ", array1)//sliced element only get copied not removed (does not change original array)

//Splice
const splice = array1.splice(1, 3)  //3 included
console.log("Spliced: ", splice)
console.log("OG array after splice: ", array1)//spliced elements get removed from original array (changes original array)