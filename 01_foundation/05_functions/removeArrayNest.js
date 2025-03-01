//Flatten Array

function flattenArray(inputArray) {
    // console.log(inputArray.flat(1))
    // console.log(inputArray.flat(2))
    // console.log(inputArray.flat(3))
    return inputArray.flat(Infinity); //if depth not known
}

console.log(flattenArray([1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]))