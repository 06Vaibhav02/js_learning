// For Constructor
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    return `Hello my name is ${this.name}`
}

let myName = new Person("Vaibhav")
console.log(myName.greet())

// For Classes
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `engine of ${this.make} - ${this.model} is starting`
    }
}

Car.prototype.end = function () {
    return `engine of ${this.make} - ${this.model} is ending`
}

let myCar = new Car("Tata", "Safari")
console.log(myCar.end())

