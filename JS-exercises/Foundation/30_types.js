/* 1: Write a function stringToNumber that takes a string input and tries to convert it to a number. 
        If the conversion fails, return "Not a number". */
function stringToNumber(input) {
    let conversion = Number(input);
    if (isNaN(conversion)) {
        return `Not a number`;
    }
    else {
        return conversion;
    }
}
let result = stringToNumber("");
// console.log(result);

/* 2: Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.*/
function flipBoolean(input) {
    let conversion = Boolean(input);         //Boolean('Computer') == 1
    let negation = !conversion;
    return negation;
}
let flip = flipBoolean("");
// console.log(flip);

/*3. Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"*/

function whatAmI(input) {
    if (typeof (input) == 'string') {      
        return `I'm a string`;
    } 
    if (typeof (input) == 'Number'){        //Number wont work as case sensitivity, number is right
        return `I'm a number`;             
    }    
    //here both typeof() output is a string ('number', 'string') datatype hence compared to direct strings ('number' and 'string')
}
let resultString = whatAmI(45);
// console.log(resultString);
// console.log(typeof(45));

/* 4: Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
*/

function isItTruthy(input) {
    let conversion = Boolean(input);
    if(conversion){
        return `It's truthy`
    }
    else{
        return `It's falsey`
    }
}
let truthFalsy = isItTruthy("");
console.log(truthFalsy);