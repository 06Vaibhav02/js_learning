// creating object literal

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} was made in year ${this.year}`;
    }

}
// console.log(car.start()); 
// but cannot make copies of this object - so we use constructor function

//Class 
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//Object, Instance  
let vaibhav = new Person("vaibhav patil", 27);
// console.log(vaibhav)
// console.log(vaibhav.name) //this tells which name to print

// Adding a property to prototype of class (created by me) -- prototype chain
Person.prototype.work = function () {
    return `${this.name} does web development`
}


// Accesing the property from instance
// console.log(vaibhav.work());

// Adding a property to prototype of class (inbuilt) 

Array.prototype.vb = function () {
    return `custom method ${this}`       //this points to the instance -- here it is an array object
}

// Accesing the property in an instance -- keep an eye on 'this'
let myArray = [1, 2, 3]
// console.log(myArray.vb())
let myNewArray = [1, 2, 3, 4, 5, 6]
// console.log(myNewArray.vb())



// -------------------------------------------------------------------------------------------------------------------------------------------------
// CLASS CREATION -- UNDER THE HOOD THEY ARE STILL PROTOTYPE
//Note:  function declared inside a class is called a method
//Note: constuctor method is automatically called when object is created
//CLASS
class Vehicle {
    constructor(make, model) {      //constructor takes parameters from arguments recieved in instance creation
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model} is from ${this.make}`
    }
}

// INHERITANCE
//Car inherits properties [ constructor(), make, model, start()] from Vehicle
class Car extends Vehicle {       //Car is a new class
    drive() {
        return `${this.make} : an example of inheritance`
    }
}

let myCar = new Car("Tata", "Safari"); //arguments sent to constructor
// console.log(myCar.start());
// console.log(myCar.drive());


// a check for error without new
// let vehicleOne = Vehicle()
// console.log(vehicleOne.make)


// ENCAPSULATION -- restricting direct access to object data, we cannot use encapsulated data outside of class or in instance

class BankAccount {
    #balance = 0;  //encapsulation 

    deposit(amount) {
        this.#balance += amount;    // this.#balance = this.#balance + amount
        return this.#balance;
    }

    getBalance() {
        return `Your account balance is $ ${this.#balance}`;
    }
}

let accountOne = new BankAccount() //no constructor to send arguments to 
// console.log("balance - ", accountOne.balance)
accountOne.deposit(100);
// console.log(accountOne.getBalance());


// ABSTRACTION -- hiding complex implementation details 

class CoffeeMachine {
    start() {
        // call DB - hidden --abstraction
        // filter value - hidden --abstraction
        return `Started the coffee machine`
    }

    brewing() {
        // start brewing - hidden --abstraction
        // end brewing - hidden  --abstraction
        return `Brewing done`
    }

    pressStartButton() {
        let msgOne = this.start();
        let msgTwo = this.brewing();
        return `${msgOne} + ${msgTwo}`;
    }
}

let myMachine = new CoffeeMachine()
// console.log(myMachine.start());
// console.log(myMachine.brewing());
//adding more abstraction
// console.log(myMachine.pressStartButton())     //start() , brewing() -- hidden


// Polymorphism -- many forms -- same function with different signatures
//Two types : 
// 1.  Method Overriding: child class overides method of parent class
// 2. Method Overloading(simulated):

class Bird {
    fly() {
        return `Flying.....`;
    }
}

class Penguin extends Bird {
    fly() {
        return `Penguins do not fly`;
    } //Method overriding
}

let sparrow = new Bird()
let penguin = new Penguin()

// console.log(sparrow.fly());


// STATIC METHOD -- this method can only be called by class itself -- intances of the class cannot call this function

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// let calciOne = new Calculator();
// console.log(calciOne.add(4,5));    // cannot be called by an instance -- will give error

// console.log(Calculator.add(4, 5)) //can only be called by class itself


// GETTERS , SETTERS   use '_'

class Employee {
    #salary; //encapsulation
    constructor(name, salary) {
        if (salary < 0) {
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this.#salary = salary;
    }

    get salary() {
        return `You are not allowed to see salary ${this.#salary}`;
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid Salary");
        } else {
            this.#salary = value;
        }
    }
}
let emp = new Employee("Alice", 50000);
console.log(emp.salary);        //getting salary

emp.salary = 60000;            //setting salary
console.log(emp.salary);       //getting salary