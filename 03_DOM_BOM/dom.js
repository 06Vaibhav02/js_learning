/* DOM Manipulation
    = get an element 
    = event listening
*/

//Solution - 1 : Accessing DOM Elements
document.getElementById("changeTextButton").addEventListener('click', function () {
    //console.log(this) // here this points to button selected, for normal function
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "Text is changed due to click"
});

/* 
Interview purpose
document.getElementById("changeTextButton").addEventListener('click', () => { 
    console.log(this) // here this points to window object, for arrow function
});
*/

// Solution - 2 : Traversing the DOM 
document.getElementById("highlightFirstCity").addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
});

// Solution - 3 : Manipulating DOM Elements
document.getElementById("changeOrder").addEventListener("click", function () {
    let orderChange = document.getElementById("coffeeType");
    orderChange.textContent = "Espresso";
    orderChange.style.backgroundColor = "orange";
    orderChange.style.padding = "6px";
});


// Solution - 4 : Creating and Inserting Elements
document.getElementById("addNewItem").addEventListener("click", function () {
    //creating node or element
    let newItem = document.createElement("li");
    newItem.textContent = "Eggs";

    //injecting node or element into dom
    document.getElementById("shoppingList").appendChild(newItem);
});


// Solution - 5 : Removing DOM Elements 
document.getElementById("removeLastTask").addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    // taskList.remove();      //removes all elements in list altogether
    taskList.lastElementChild.remove();
});

// Solution - 6 : Event Handling in the DOM

document.getElementById("clickMeButton").addEventListener("mouseover", function () {
    alert("You hovered over the button");
    //learn more about event handling from mdn, learn as per usage.
});


// Solution - 7 : Event Delegation
document.getElementById("teaList").addEventListener("click", function (event) {
    // console.log(event); 
    // console.log(event.target);

    if (event.target && event.target.matches('.teaItem')) {    
        //matches so that only .teaItem elements selected
        // alert(`You selected ${event.target}`); //test
        alert(`You selected ${event.target.textContent}`);
    }
});

// Solution - 8 : Form Handling 

document.getElementById("feedbackForm").addEventListener("submit", function(event){
    event.preventDefault() //used to prevent the browser from executing the default action of the selected element
})



// Solution - 9 :
// Solution - 10 : 