const one = () => console.log("First")
const two = () => setTimeout(() => console.log("Second"),500);
const three = () => console.log("Third")

two()
one()
three()

//OUTPUT 
First 
Third 
Second