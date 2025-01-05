
/*
1. Write a function sumOfN(n) that returns the sum of the first n natural numbers
*/
function sumOfN(n) {
    let sum = 0;
    for (i = 0; i <= n; i++) {
        sum = sum + i
    }
    return sum;
}
let naturalNumber = 10;
console.log(sumOfN(naturalNumber))

/*
2. Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 
2 * 2 = 4
*/

function printMultiplicationTable(n) {
    let tableArray = []
    
    for (i = 1; i <= 10; i++) {
        tableArray.push(`${n}*${i} = ${n*i}`);
    }
    return tableArray;
}
let number = 2;
let table = printMultiplicationTable(number);
console.log(table);


/*
3. Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
*/
function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
      if (vowels.includes(char)) {     // check if character from string present in vowels string
        // console.log(char)
        count++;
      }
    }
    return count;
  }

console.log(countVowels("My name is Vaibhav"))