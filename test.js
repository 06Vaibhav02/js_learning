const findLongestWord = (arr) => {
    return arr.reduce((largest,current) => {
        largest = "";
        if (current.length > largest.length){
            largest = current
            console.log(largest)
        }
        return largest
    })

};
let stringArray = ["Vaibhav", "Patil", "Engineering", "Computer"]
console.log(findLongestWord(stringArray));
// findLongestWord(stringArray);