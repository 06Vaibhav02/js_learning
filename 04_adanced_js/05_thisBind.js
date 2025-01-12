let person = {
    name: "Vaibhav",
    greet() {
        return `Hello my name is ${this.name}` //this set context to person properties
    }
}

console.log(person.greet())        //this points to Vaibhav

let getFunction = person.greet         //tranfersing the reference
console.log(getFunction())             //context is not changed   // this points to nothing hence undefined


let bindFunction = person.greet.bind({ name: "Patil" })   //this points to Patil
console.log(bindFunction())

//learn about bind(), call() and apply()