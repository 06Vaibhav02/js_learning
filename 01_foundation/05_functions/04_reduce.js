// Reduce() : Used to reduce array into a single value

//1
let sumPositiveNumbers = (arr) => {
    let filteredArray = arr.filter(element => element > 0)
    let reducedArray = filteredArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0)
    return reducedArray;
}

let thirdArray = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6];
console.log(sumPositiveNumbers(thirdArray));

//2
let findLongestWord = (array) => {
    return array.reduce((largest, current) => {
        if (largest.length < current.length) {
            largest = current;
        }
        return largest
    }, " ")
}


let stringArray = ["Vaibhav", "Patil", "Engineering", "Computer", "XXXXXXXXXXXXXXXXXXXXX"]
console.log(findLongestWord(stringArray));