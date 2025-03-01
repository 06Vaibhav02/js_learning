function findMax(arr) {
    return Math.max(...arr);      // spread operator  // try using reduce 
}
let threeArray = [56, 66, 28, -99, 102, 120, 11];
console.log(`Max Value = ${findMax(threeArray)}`)