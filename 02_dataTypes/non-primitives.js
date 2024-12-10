// Objects Arrays Functions 

//Object

const userName = {      //key: value pair
    "firstName": "VB",
    "isLoggedIn": false,
};  
// here const userName holds reference of object and that reference is fixed, so we can change internal data inspite of being const
// Youtube Stack vs Heap -- chaiaurcode

userName.firstName = "Vaibhav";
userName.lastName = "Patil"

// console.log(userName.firstName); // not favourable method for spaced words
// console.log(userName.lastName);
// console.log(typeof userName); //object

// console.log(userName["isLoggedIn"]); // better method 

//Array -- collection

let newUserName = ["Vaibhav", true];
// console.log(newUserName[1]);

//DATE

let date = new Date();
// console.log(date);
// console.log(typeof date); //object

// Type Conversion

let isValue = true;      //js converts this to 1
// console.log(isValue + 1); //impicit conversion from js and it is bad.
// console.log("1" + 1); 

let newValue = "abc";
// console.log(typeof Number(isValue));
console.log(Number(newValue));
console.log(typeof Number(newValue));
console.log(Number(undefined));
console.log(Number(null));

