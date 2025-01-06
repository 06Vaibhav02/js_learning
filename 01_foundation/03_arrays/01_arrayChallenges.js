/* 
1. Declare an array named `teaFlavors` that contains the strings `"green tea"`, `"black tea"`, and `"oolong tea"`. 
   Access the first element of the array and store it in a variable named `firstTea`.
*/

// let teaFlavors = new Array("green tea", "black tea", "oolang tea");

let teaFlavors = ["green tea", "black tea", "oolang tea"];
let firstTea = teaFlavors[0];
// console.log(`Solution 1: ${firstTea}`);

/* 
2. Declare an array named `cities` containing `"London"`, `"Tokyo"`, `"Paris"`, and `"New York"`. 
Access the third element in the array and store it in a variable named `favoriteCity`.
*/

let cities = ["London", "Tokyo", "Paris", "New York"];
let favoriteCity = cities[2];
// console.log(`Solution 2: ${favoriteCity}`);

/* 
3. You have an array named `teaTypes` containing `"herbal tea"`, `"white tea"`, and `"masala chai"`. 
Change the second element of the array to `"jasmine tea"`.
*/
let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
// console.log(`Solution 3: ${teaTypes}`);


/* PUSH METHOD
4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Sydney"`. 
Add `"Berlin"` to the array using the `push` method.
*/

let citiesVisited = ["Mumbai", "Sydney"];
// citiesVisited[citiesVisited.length] = "Berlin";    //avoid
citiesVisited.push("Berlin")
// console.log(`Solution 4: ${citiesVisited}`);

/* POP METHOD
5. You have an array named `teaOrders` with `"chai"`, `"iced tea"`, `"matcha"`, and `"earl grey"`. 
Remove the last element of the array using the `pop` method and store it in a variable named `lastOrder`.
*/

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"]
let lastOrder = teaOrders.pop();
// console.log(`Solution 5: ${lastOrder}`);


/* CREATING SOFT COPY OF AN ARRAY -- behaves same as original
6. You have an array named `popularTeas` containing `"green tea"`, `"oolong tea"`, and `"chai"`. 
   Create a soft copy of this array named `softCopyTeas`.
*/
let popularTeas = ["green tea", "oolang tea", "chai"];
let softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopyTeas);

/* CREATING HARD COPY OF AN ARRAY -- does not behave same as original
7. You have an array named `topCities` containing `"Berlin"`, `"Singapore"`, and `"New York"`. 
   Create a hard copy of this array named `hardCopyCities`.
*/
let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; //method 1
hardCopyCities = topCities.slice(); // method 2 - avoid

topCities.pop();
// console.log(topCities);
// console.log(hardCopyCities);


/* MERGE ARRAYS METHOD
8. You have two arrays: `europeanCities` containing `"Paris"` and `"Rome"`, and `asianCities` containing `"Tokyo"` and `"Bangkok"`. 
   Merge these two arrays into a new array named `worldCities`.
*/
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let worldCities = europeanCities + asianCities; // wrong approach
// let worldCities = [europeanCities,asianCities]; // wrong approch -- will give 2D array
let worldCities = europeanCities.concat(asianCities); // approach 1 -- only for 2 arrays 
// console.log(worldCities);

/*
let topCities = ["Berlin", "Singapore", "New York"];
let topNames = ["Vaibhav", "Akash", "Kaustubh"]
let topSurname = ["Patil", "Kankariya", "Magdum"]

let hardCopyCities = [...topCities,...topNames,...topSurname ]; //method 1
console.log(hardCopyCities)
*/  // approach 2 -- for multiple arrays



/* PRINT LENGTH OF AN ARRAY
9. You have an array named `teaMenu` containing `"masala chai"`, `"oolong tea"`, `"green tea"`, and `"earl grey"`. 
   Find the length of the array and store it in a variable named `menuLength`.
*/
let teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;
// console.log(`Solution 9: ${menuLength}`); //4

/* CHECK IF ITEM IN ARRAY
10. You have an array named `cityBucketList` containing `"Kyoto"`, `"London"`, `"Cape Town"`, and `"Vancouver"`. 
    Check if `"London"` is in the array and store the result in a variable named `isLondonInList`.
*/
let cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = cityBucketList.includes("London");
// let isLondonInList = cityBucketList.includes("london"); perfect matching done;

// console.log(isLondonInList);



