let addButton = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");
let darkModeBtn = document.getElementById("darkModeBtn");
let taskCount = document.getElementById("taskCount");

let tasks = [];

addButton.addEventListener("click", addTask);

function addTask(){

    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }

    let taskObject = {
        name: taskText,
        completed: false
    };

    tasks.push(taskObject);

    taskInput.value = "";

    displayTasks();
}

function displayTasks(){

    taskCount.textContent = tasks.length;

    taskList.innerHTML = "";

    for(let i = 0; i < tasks.length; i++){

        let li = document.createElement("li");

        li.textContent = tasks[i].name;

        if(tasks[i].completed){
            li.classList.add("completed");
        }

        li.addEventListener("click", function(){

            tasks[i].completed = !tasks[i].completed;

            displayTasks();

        });

        let deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";

        deleteButton.classList.add("deleteBtn");

        deleteButton.addEventListener("click", function(event){

            event.stopPropagation();

            tasks.splice(i,1);

            displayTasks();

        });

        li.appendChild(deleteButton);

        taskList.appendChild(li);
    }
}

darkModeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        darkModeBtn.textContent = "☀️ Light Mode";
    }
    else{
        darkModeBtn.textContent = "🌙 Dark Mode";
    }

});

taskInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});

taskCount.textContent = tasks.length;