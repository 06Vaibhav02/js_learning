let person = {
    name: "Vaibhav",
    greet() {
        return `Hello my name is ${this.name}` //this set context to person properties
    }
}

console.log(person.greet()) 

// let getFunction = person.greet 
// console.log(getFunction())

let getFunction = person.greet()
console.log(getFunction)