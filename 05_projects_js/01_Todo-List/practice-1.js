//Perform entire code only when DOM is loaded else not, cause there may be server issues and html page not properly loaded 

document.addEventListener("DOMContentLoaded", () => {
    const toDoInput = document.getElementById("todo-input");
    const addTaskButton = document.getElementById("add-task-btn");
    const toDoList = document.getElementById("todo-list");
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    //tasks acts as empty array if nothing stored in local storage

    //print from localstorage after refreshing webpage 
    tasks.forEach(task => {
        renderTask(task)                     //task == object
    });

    addTaskButton.addEventListener("click", () => {
        let taskText = toDoInput.value.trim()
        if (taskText === "") return     // end if clicked with empty string

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
        } //creating object of task

        tasks.push(newTask); //add task to array
        saveTasks()
        //add task to localStorage from array - entire array rewritten with each addition to local storage

        taskText = "" // clear previous task
        console.log(tasks) //
    });

    //from localstorage 
    function renderTask(task) {
        // console.log(task.text);        //prints on refresh //tasklist from localstorage
        const li = document.createElement("li");


        
        // creating listitem of task from locakstorage
        li.setAttribute("data-id", task.id)     //setting id of task from object
        li.innerHTML = `
        <span>${task.text}</span>
        <button>delete</button>
        `
        //adding listitem to DOM
        toDoList.appendChild(li)

    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
        //entire array is rewritten after each task addition
    }
})