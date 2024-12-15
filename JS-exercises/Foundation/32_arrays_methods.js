// Utilise the inbuilt methods of arrays in Javascript to solve the below tasks:

/*
1. Write a function filterNumbers(arr) that returns only numbers from a mixed array
*/

function filterNumbers(arr) {
    console.log(arr);
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            filteredArray.push(arr[i]);
        }
        /*
          if (isNaN(arr[i])) { /
          // Note - wont work as isNaN(boolean) = false
              console.log(arr[i])
              continue;
          } else {
              filteredArray.push(arr[i]);
          }
        */
    }
    return filteredArray;
}
let mixedArray = [1, 3, "abc", false, 56, "zyx"];
let filter = filterNumbers(mixedArray)
// console.log(filter);

/*
2. Write a function reverseArray(arr) that reverses the array
*/
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
let orignalArray = [1, 2, 3, 4, 5, 6];
let reverse = reverseArray(orignalArray)
// console.log(reverse);

/*
3. Write a function findMax(arr) that returns the largest number in the array
*/

function findMax(arr) {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
let array = [8, 9, 56, 78, -23, 45, 7, 101, 44, 99];
let maxValue = findMax(array);
// console.log(maxValue);

/*
4. Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
*/
function removeDuplicates(arr) {
    let newArr = []



}
let actualArray = [1, 2, 3, 4, 3, 5, 4, 6, 2, 1, 5, 6];
let freshArray = removeDuplicates(actualArray);
console.log(freshArray);

/*
5. Write a function flattenArray(arr) that takes a nested array and returns a single flattened array
*/
function flattenArray(arr) {

}

let nestedArray = [1, 2, 3, [4, 5, 6]];
let nonNestedArray = flattenArray(nestedArray);
console.log(nonNestedArray);