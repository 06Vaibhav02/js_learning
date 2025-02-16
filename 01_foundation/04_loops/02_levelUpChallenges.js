/* 
1. Write a `for` loop that loops through the array `["green tea", "black tea", "chai", "oolong tea"]` and stops the loop when it finds `"chai"`. 
   Store all teas before `"chai"` in a new array named `selectedTeas`.
*/ // USE OF BREAK

let teaArray = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];

for (let i = 0; i < teaArray.length; i++) {

  if (teaArray[i] === "chai") {
    break;
  } else {
    // selectedTeas[i] = teaArray[i];
    selectedTeas.push(teaArray[i]);
  }
}
// console.log(`1. Selected Teas = ${selectedTeas}`);

/* 
2. Write a `for` loop that loops through the array `["London", "New York", "Paris", "Berlin"]` and skips `"Paris"`. 
   Store the other cities in a new array named `visitedCities`.
*/ //USE OF CONTINUE

let cityNames = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cityNames.length; i++) {

  if (cityNames[i] === "Paris") {
    continue;
  } else {
    // visitedCities[i] = cityNames[i]; 
    // dont use this method array, new array will have empty value at skipped position
    visitedCities.push(cityNames[i])
  }

}
// console.log(`2. Visited Cities = ${visitedCities}`);
// console.log(visitedCities); for checking

/* 
3. Use a `for-of` loop to iterate through the array `[1, 2, 3, 4, 5]` and stop when the number `4` is found. 
   Store the numbers before `4` in an array named `smallNumbers`.
*/ //USE OF FOR OF LOOP

let numArray = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const element of numArray) {                           //array is an object
  if (element === 4) {
    break;
  }
  else {
    smallNumbers.push(element);
  }
}
// console.log(`3. Small Numbers = ${smallNumbers}`);

/* 
4. Use a `for-of` loop to iterate through the array `["chai", "green tea", "herbal tea", "black tea"]` and skip `"herbal tea"`. 
   Store the other teas in an array named `preferredTeas`.
*/ //USE OF FOR OF LOOP

let teaNames = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const element of teaNames) {
  if (element === "herbal tea") {
    continue;
  }
  else {
    preferredTeas.push(element);
  }
}
// console.log(`4. Preffered Teas = ${preferredTeas}`);



/* 
5. Use a `for-in` loop to loop through an object containing city populations. 
   Stop the loop when the population of `"Berlin"` is found and store all previous cities' populations in a new object named `cityNewPopulations`.

   let citiesPopulation = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
};

*/ //USE OF FOR IN LOOP

let citiesPopulation = {
  "London": 8900000,
  "New York": 8400000,
  "Paris": 2200000,
  "Berlin": 3500000
};

let citiesNewPopulations = {};
// console.log(citiesPopulation["London"]);


for (const city in citiesPopulation) {

  if (city === "Berlin") {
    break;
  }
  else {

    // citiesPopulation["India"] = 5000000; //adding new key-value in object
    citiesNewPopulations[city] = citiesPopulation[city];
  }
}
// console.log("New Object = ", citiesNewPopulations);


/* 
6. Use a `for-in` loop to loop through an object containing city populations. 
   Skip any city with a population below 3 million and store the rest in a new object named `largeCities`.
   let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
};
*/ //USE OF FOR IN LOOP

let worldCities = {
  "Sydney": 5000000,
  "Tokyo": 9000000,
  "Berlin": 3500000,
  "Paris": 2200000
};

let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) {
    continue;
  } else {
    largeCities[city] = worldCities[city];
  }
}
// console.log("Large = ", largeCities) // no paris

/* 
7. Write a `forEach` loop that iterates through the array `["earl grey", "green tea", "chai", "oolong tea"]`. 
   Stop the loop when `"chai"` is found, and store all previous tea types in an array named `availableTeas`.
*/

let teaTypes = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = []
// we cannot use break and continue inside foreach loop

teaTypes.forEach(function (tea) {
  if (tea === "chai") {
    return false;
  }
  else {
    availableTeas.push(tea)
    return true; 
  }
});
// console.log(availableTeas);

/* 
FOR EACH CANNOT BE USED TO BREAK AT A POINT - CAN BE DONE USING EVERY
let allTeas = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

allTeas.every(function (tea) {
  if (tea === "chai") {
    return false;
  }
  availableTeas.push(tea);
  return true;
});
console.log(availableTeas)
*/

/* 
8. Write a `forEach` loop that iterates through the array `["Berlin", "Tokyo", "Sydney", "Paris"]`. 
   Skip `"Sydney"` and store the other cities in a new array named `traveledCities`.
*/
let myCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = []

myCities.forEach(function (city) {
  if (city === "Sydney") {
    return false;
  }
  else {
    traveledCities.push(city)
    return true;
  }
});
// each array element is passed through FUNCTION independently so break wont work
// For loop it will work cause whole array passes at a time
// console.log(traveledCities)

/* 
9. Write a `for` loop that iterates through the array `[2, 5, 7, 9]`. 
   Skip the value `7` and multiply the rest by 2. Store the results in a new array named `doubledNumbers`.
*/
let myNumArray = [2, 5, 7, 9];
let doubledNumbers = []

for (let i = 0; i < myNumArray.length; i++) {
  if (myNumArray[i] === 7) {
    continue;
  }
  else {
    doubledNumbers.push((myNumArray[i] * 2))
  }

}
// console.log(doubledNumbers)

/* 
10. Use a `for-of` loop to iterate through the array `["chai", "green tea", "black tea", "jasmine tea", "herbal tea"]` 
    and stop when the length of the current tea name is greater than 10. 
    Store the teas iterated over in an array named `shortTeas`.
*/

let newTeaArray = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of newTeaArray) {
  if (tea.length > 10) {
    break;
  } else {
    shortTeas.push(tea)
  }
}
console.log(shortTeas);

