// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

/*
1. Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/
// WITHOUT USING INBUILT FUNCTION
// function filterNumbers(arr) {
//     let filteredArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) === 'number') {
//             filteredArray.push(arr[i]);
//         }
//         /*
//           if (isNaN(arr[i])) { /
//           // Note - wont work as isNaN(boolean) = false
//               console.log(arr[i])
//               continue;
//           } else {
//               filteredArray.push(arr[i]);
//           }
//         */
//     }
//     return filteredArray;
// }
// let mixedArray = [1, 3, "abc", false, 56, "zyx"];
// let filter = filterNumbers(mixedArray)
// // console.log(filter);

function filterNumbers(arr) {
    return arr.filter(item => typeof item === 'number');        // in this item is returned 
}
let oneArray = ["JavaScript", 1, 62, false, 55, -43];
console.log(`Filtered Array = ${filterNumbers(oneArray)}`);

/*
2. Write a function reverseArray(arr) that reverses the array
*/
//WITHOUT USING INBUILT FUNCTION
// function reverseArray(arr) {
//     let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }
//     return reversedArray;
// }
// let orignalArray = [1, 2, 3, 4, 5, 6];
// let reverse = reverseArray(orignalArray)
// // console.log(reverse);

function reverseArray(arr) {
    return arr.reverse();
}
let twoArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(`Reversed Array = ${reverseArray(twoArray)}`);

/*
3. Write a function findMax(arr) that returns the largest number in the array
*/
//WITHOUT USING INBUILT FUNCTION
// function findMax(arr) {
//     let max = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// let array = [8, 9, 56, 78, -23, 45, 7, 101, 44, 99];
// let maxValue = findMax(array);
// // console.log(maxValue);
function findMax(arr) {
    return Math.max(...arr);      // spread operator  // try using reduce 
}
let threeArray = [56, 66, 28, -99, 102, 120, 11];
console.log(`Max Value = ${findMax(threeArray)}`)


/*
4. Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/
//WITHOUT USING INBUILT FUNCTION
// function removeDuplicates(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (newArr.includes(arr[i])) {
//             continue;
//         }
//         else {
//             newArr.push(arr[i])
//         }

//     }
//     return newArr;
// }
// let actualArray = [1, 2, 3, 4, 3, 5, 4, 6, 2, 1, 5, 6];
// let freshArray = removeDuplicates(actualArray);
// console.log(`Array without Duplicates = ${freshArray}`);
function removeDuplicates(arr) {
    let rd = [];
    rd = new Set(arr);    // no duplicates allowed in Set
    return [...rd];
}
let fourArray = [1, 3, 4, 2, 5, 1, 4, 2, 3, 6];
// console.log(`Array Without Dupicates = ${removeDuplicates(fourArray)}`)
console.log(removeDuplicates(fourArray));


/*
5. Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/
function flattenArray(arr) {
    // return arr.flat(1);            //1 == depth      // use infinity depth if nesting depth not known
    return arr.flat(Infinity);
}
let fiveArray = [1, 2, 3, 4, [5, 6, 7, [8, 9]]];
// console.log(`Non Nested Array = ${flattenArray(fiveArray)}`);
console.log(flattenArray(fiveArray));
