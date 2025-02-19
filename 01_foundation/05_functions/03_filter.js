// filter() : Used to filter array according to condition  //output = array

//without inbuilt function
function filterNumbers_1(arr) {
    let numArray = []
    for (const element of arr) {
        if (typeof element === 'number') {
            numArray.push(element)
        }
    }
    return numArray;
}

console.log(filterNumbers_1([1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e', 6, false, null]))


//with inbuilt function
function filterNumbers_2(arr) {
    return arr.filter(item => typeof item === 'number');        // in this item is returned 
}
let oneArray = ["JavaScript", 1, 62, false, 55, -43];
console.log(`Filtered Array = ${filterNumbers_2(oneArray)}`); // mot printed in array format due to string interpolation