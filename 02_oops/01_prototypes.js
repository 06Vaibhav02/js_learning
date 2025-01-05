// OOPS is style of writing a code - every language supports it 

// JS is a prototype(extra properties and functionalities for a given datatype) based language
// But it can be used as a OOP/ class/ object. based language

/* 
    Notes: All JavaScript objects inherit properties and methods from a prototype which is also an object.
*/


//Method 1: to set prototype
let computer = { cpu: 12 };
let lenovo = {
    screen: "HD",  //own property
    __proto__: computer,  //linking to prototype of computer //inherit properties from computer
}; 
// Lenovo inherits properties from prototype and computer 

let dell = {};

// console.log(`computer `,computer);
// console.log(`computer `,computer.__proto__);
console.log(`lenovo `,lenovo.__proto__);


//Method 2 

let genreicCar = {"tyre": 4}
let tesla = {
    "driver": "AI"
}
Object.setPrototypeOf(tesla, genreicCar);
console.log(`Tesla Prototype = `,Object.getPrototypeOf(tesla)) 
        // accesing inherited properties from genericCar 
// tesla inherites properties from prototype and genericCars
// 

