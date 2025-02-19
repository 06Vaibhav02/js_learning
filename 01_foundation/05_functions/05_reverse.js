//without inbuilt function
function reverse_1(inputArray) {
    let newArray = []
    for (let i = inputArray.length - 1; i >= 0; i--) {
        newArray.push(inputArray[i])
    }
    return newArray;
}
console.log(reverse_1([1, 2, 3, 4, 5, 6, 7, 8, 9]))

//with inbuilt function
function reverse_2(inputArray) {
    return inputArray.reverse();
}

console.log(reverse_2([1, 2, 3, 4, 5, 6, 7, 8, 9]))
