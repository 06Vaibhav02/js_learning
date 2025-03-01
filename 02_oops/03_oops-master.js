// creating object literal
let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function () {
        return `${this.make} was made in year ${this.year}`;
    }
}//here this points to car = {}
// console.log(car.start()); 
// but cannot make copies of this object - so we use constructor function

//constructor function //a prototype
function Person(name, age) {
    this.name = name;
    this.age = age;
}
//Object, Instance  
let vaibhav = new Person("vaibhav patil", 27);
// console.log(typeof vaibhav)
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
//Note: constuctor method is automatically called when object is created, if constructor function not defined empty constructor function added
//in constructor method we need to add this for everthing

//CLASS -- it is a syntactic sugar (easy to read and write) for constructor function
class Vehicle {
    constructor(make, model) {      //constructor takes parameters from arguments recieved in instance creation
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model} is from ${this.make}`
    }
}

//CONCEPT ---- INHERITANCE
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


//CONCEPT ---- ENCAPSULATION -- restricting direct access to object data, we cannot use encapsulated data outside of class or in instance
// balance can only be printed if its done in class itself - instance cannot be used to call it
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


//CONCEPT ---- ABSTRACTION -- hiding complex implementation details 

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


//CONCEPT ---- POLYMORPHISM -- many forms -- same function with different signatures in same class or in (parent-child) classes
//Two types : 
// 1.  Method Overriding: child class overides method of parent class (in parent - child)
// 2. Method Overloading(simulated): (same class)

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
// console.log(penguin.fly());

class Calculator {
    add(a, b) {
        if (b === undefined) {
            return a + a;
        }
        return a + b;
    }
}// Method Overloading can only be, simulated in js 
const calc = new Calculator();
console.log(calc.add(2));
console.log(calc.add(2, 3));
//add() behaves differently depending on the arguments passed


//CONCEPT ----  STATIC METHOD -- this method can only be called by class itself -- intances/objects of the class cannot call this function

class Calculator {
    static add(a, b) {
        return a + b;
    }
}

// let calciOne = new Calculator();
// console.log(calciOne.add(4,5));   // cannot be called by an instance -- will give error

// console.log(Calculator.add(4, 5)) //can only be called by class itself


//-------------------------------------------------------------------------------------------------------------------------------------

//CONCEPT ----  GETTERS , SETTERS   use '_'
class Employee {

    constructor(name, salary) {

        if (salary < 0) {
            throw new Error("Salary cannot be in negative");
        }
        this.name = name;
        this._salary = salary;
    }

    get salary() {
        return `You are not allowed to see salary still have it -  ${this._salary}`;
    }

    set salary(value) {
        if (value < 0) {
            console.error("Invalid Salary");
        } else {
            this._salary = value;
        }
    }
}
let emp = new Employee("Alice", 50000);
console.log(emp.salary);        //getting salary //5000

emp.salary = 60000;            //setting salary
console.log(emp.salary);       //getting salary //6000

