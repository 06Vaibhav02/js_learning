//Remove Dupplicates - use case - remove duplicate data from database 
//first method
function removeDuplicates_1(inputArray) {
    let newArray = []
    for (const element of inputArray) {
        if (newArray.includes(element)) {
            continue
        }
        else {
            newArray.push(element)
        }
    }
    return newArray;
}

let array_1 = [1, 2, 3, 2, 4, 3, 5, 4, 6]
// console.log(removeDuplicates_1(array))

//second method
function removeDuplicates_2(inputArray) {
    let rd = []
    rd = new Set(inputArray) //output is not array 
    rd = [...rd]    // convert back to array
    return rd;

}

let array_2 = [1, 2, 3, 2, 4, 3, 5, 4, 6, 7, 7, 7, 7, 7, 7]
console.log(removeDuplicates_2(array_2))
