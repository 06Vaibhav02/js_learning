// OOPS is style of writing a code - every language supports it 

// JS is a prototype(extra properties and functionalities for a given datatype) based language
// But it can be used as a OOP/ class/ object. based language


/*
Prototype-based programming
Objects are created without defining a class, and inherit properties and methods from other objects. This style emphasizes delegation and dynamic behavior, and encourages programmers to focus on the behavior of examples. inhertited properties is an object called prootype
*/
/*
Object-oriented programming
Objects are created using classes, and extend child classes to inherit properties and methods. OOP relies on a formal class hierarchy, and is well-suited to testing and debugging
*/

let computer = { cpu: 12 };

//Method 1: to set prototype
let lenovo = {
    screen: "HD",  //own property
    __proto__: computer,  //linking to prototype of computer //inherit properties from computer
};
// Lenovo inherits properties from prototype and computer 


// console.log(`computer `,computer);
// console.log(`computer `,computer.__proto__);
// console.log(`lenovo `, lenovo.__proto__);
// console.log(computer.__proto__)


//Method 2 

let genreicCar = { "tyre": 4 }
let tesla = {
    "driver": "AI"
}
Object.setPrototypeOf(tesla, genreicCar);
// console.log(`Tesla Prototype = `, Object.getPrototypeOf(tesla))
// accesing inherited properties from genericCar 
// tesla inherites properties from prototype and genericCars
// 

// Extra learning

//prototype
const player = {
    name: "Vaibhav",
    score: 100,
    myResult() {
        console.log(`My name is ${this.name} and my score is ${this.score}`);
    }
} //universal prototype 
console.log(Object.getPrototypeOf(player)) // {}

//creating objects from prototype

const p1 = Object.create(player)      //universal prototype + player prototype
const p2 = Object.create(player)

// console.log(p1,p2) // {} {} -- empty objects 

// p1.myResult() //able to access inspite of being empty cause player is prototype of p1
// p1.myResult() //able to access inspite of being empty cause player is prototype of p2

// console.log(Object.getPrototypeOf(p1))
// console.log(Object.getPrototypeOf(p2))    

p1["age"] = 26
const p3 = Object.create(p1)

console.log("XXXXXXXXXXXX", Object.getPrototypeOf(p3))



