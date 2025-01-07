//Capital letter used to name constructor function
console.log(this) // { } ==> global object 

// Constructor, Blueprint
function Car(make, model) {
    this.make = make;                  //this.make => own defined variable, make => parameter      
    this.model = model;
}

//Instances, Objects, Copies

// let firstCar = Car("Tata","Safari");     //without new
// console.log(firstCar);

let firstCar = new Car("Tata", "Safari");
// console.log(firstCar);            //printed as object with properties from constructor function


let secondCar = new Car("Toyota", "Camry");
// console.log(secondCar);

// this and new are internally connected, this sets the execution context/instance

//Experiment without this
// function Tea(teaType){
//     let teaName = teaType;
//     describe = function(){
//         return `This is a ${teaName}`
//     }
// }

// let lemonTea = new Tea("lemon tea");
// console.log(lemonTea);
// // console.log(lemonTea.describe());

function Tea(teaType) {
    this.teaType = teaType;
    this.describe = function () {
        return `This is a ${this.teaType}`
    }
}

let lemonTea = new Tea("lemon tea");
// console.log(lemonTea);
// console.log(lemonTea.describe());

function Animal(species) {
    this.species = species;
}

//adding to Animal prototype (adding to animal object), so that objects whose prototype is Animal can have access to it
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
}
Animal.prototype.height = 26


let dog = new Animal('dog');
// console.log(dog);
// console.log(dog.sound());
console.log(dog.height);

//Error checking

function Drink(name) {
    if (!new.target) {            //target == tea, coffee
        throw new Error("Please add new keyword");   //here Error() is also a constructor with properties 
    }
    this.name = name;
}

let tea = new Drink('tea');
let coffee = new Drink('coffee');



