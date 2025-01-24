//Module import file


//default import 
import multiply from "./mathOperationsM.js";         //.js to add for safer side due to configuration

//named import
import {add, subtract} from "./mathOperationsM.js"

console.log(multiply(4,5))

console.log(add(4,5))
console.log(subtract(6,5))
