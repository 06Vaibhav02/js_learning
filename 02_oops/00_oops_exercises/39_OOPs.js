/*
Task 1: Encapsulation Using Getters and Setters

Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.



Task 2: Polymorphism with Method Overriding

Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively.

*/
// Task 1
// Task 1
class BankAccount {
    constructor(name, balance) {
        this._name = name
        this._balance = balance
    }
    deposit(amount) {
        if (amount < 0) {
            console.log("Please enter a valid amount to deposit")
        }
        this._balance += amount;
        return this._balance
    }
    withdraw(amount) {
        if (amount < 0) {
            console.log("Please enter a valid amount to withdraw")
        }
        this._balance -= amount

    }

    get balance() {
        return `You current account balance is - ${this._balance}`
    }

    set balance(value) {
        let removeMoney = this.withdraw()
        let addMoney = this.deposit(value)
    }
}

let newUser = new BankAccount("Vaibhav", 100)
console.log(newUser.balance)


// Task 2
class Shape {
    area() {
        return 0;
    }

}

class Circle extends Shape {
    area(r) {
        return `Area of Circle = ${3.142 * r * r}`
    }
}

class Rectangle extends Shape {
    area(l, b) {
        return `Area of rectangle = ${l * b}`
    }

}

let areaCircle = new Circle()
console.log(areaCircle.area(4))
let areaRectangle = new Rectangle()
console.log(areaRectangle.area(5, 6))