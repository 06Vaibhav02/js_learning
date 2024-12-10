/*
1. Write a "while" loop that calculates sum of all numbers from 1 to 5 and stores the result in variable "sum".
*/

let sum = 0;
let i = 1;
// 1+2+3+4+5
while (i <= 5) {
    sum = sum + i;
    i++;
}
console.log(`Sum = ${sum}`);

/*
2. Write a "while" loop that countsdown from 5 to 1 and store the numbers in array named "countdown".
*/

let j = 5;
let countdown = [];

while (j >= 1) {
    countdown.push(j);
    j--;
}
console.log(`Array = ${countdown}`);


/*
3. Write a "do while" loop that prompts a user to enter their favourite tea type until the enter "stop", store 
each tea type in array named "teaCollection"
*/

let teaCollection = [];
let tea; //take tea input from user

do {
    tea = prompt(`Enter your favorite tea so we can add to out db, type stop if you want to stop`);

    if (tea !== "stop") {
        teaCollection.push(tea);
    }
} while (tea !== "stop"); 
//check result in browser 


/* 
4. 
*/


