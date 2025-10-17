// storage.js
let tasks = [];

function taskTemplate(task) {
    return `
    <li ${task.completed ? 'class="strike"' : ""}>
      <p>${task.detail}</p>
      <div>
        <span data-action="delete">❎</span>
        <span data-action="complete">✅</span>
      </div>
    </li>`
}

function renderTasks(tasks) {
    // get the list element from the DOM
    const listElement = document.querySelector("#todoList");
    listElement.innerHTML = "";
    // loop through the tasks array. transform (map) each task object into the appropriate HTML to represent a to-do.
    const html = tasks.map(taskTemplate).join("");
    listElement.innerHTML = html;
}

function newTask() {
    // get the value entered into the #todo input
    const task = document.querySelector("#todo").value;
    // add it to our arrays tasks
    tasks.push({ detail: task, completed: false });
    // render out the list
    renderTasks(tasks);
}

function removeTask(taskElement) {
    // Notice how we are using taskElement instead of document as our starting point?
    // This will restrict our search to the element instead of searching the whole document.
    tasks = tasks.filter(
        (task) => task.detail != taskElement.querySelector('p').innerText
    );
    taskElement.remove();
}

function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.querySelector('p').innerText
    );
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    taskElement.classList.toggle("strike");
    console.log(tasks);
}

function manageTasks(e) {
    // did they click the delete or complete icon?
    console.log(e.target);
    const parent = e.target.closest("li");
    if (e.target.dataset.action === "delete") {
        removeTask(parent);
    }
    if (e.target.dataset.action === "complete") {
        completeTask(parent);
    }
}

function setUserName() {
    const name = localStorage.getItem("todo-user");
    if (name) {
        document.querySelector(".user").innerText = name;
    }
}

function userNameHandler() {
    const name = document.querySelector("#user").value;
    localStorage.setItem("todo-user", name);
    setUserName();
}


function setLocalStorage(key, data) {
    let stringData = JSON.stringify(data);
    setLocalStorage(key, stringData);
}

function getLocalStorage(key) {
    let data = localStorage.getItem(key);
    return JSON.parse(data);
}


/* Manually tried it here
let container = document.querySelector(".user");

let nameLabel = document.createElement("label");
nameLabel.innerText = "Enter your name: ";
let nameInput = document.createElement("input");
localStorage.set(todo - user, nameInput.value);

let nameButton = document.createElement("button");
nameButton.innerText = "Submit";

container.appendChild(nameLabel);
container.appendChild(nameInput);
container.appendChild(nameButton);

localStorage.get(todo - user) = document.querySelector(".user p");
*/



// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
document.querySelector("#userNameButton").addEventListener("click", userNameHandler);


// render  the initial list of tasks (if any) when the page loads
renderTasks(tasks);
setUserName();