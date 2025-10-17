// storage.js
let tasks = [];

function setLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getLocalStorage(key) {
    const data = localStorage.getItem(key);
    if (data) {
        return JSON.parse(data);
    }
    return [];
}

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
    const tasks = document.querySelector("#todo").value;

    tasks.push({ detail: detail, completed: false });

    // persist the updated tasks array
    setLocalStorage("todos", tasks);

    // re-render from the single source of truth
    renderTasks(tasks);
}

function removeTask(taskElement) {
    ;
    tasks = tasks.filter(
        (task) => task.detail !== taskElement.querySelector("p").innerText);

    taskElement.remove();
    // persist
    setLocalStorage("todos", tasks);
}


function completeTask(taskElement) {
    const taskIndex = tasks.findIndex(
        (task) => task.detail === taskElement.querySelector("p").innerText);
    tasks[taskIndex].completed = tasks[taskIndex].completed ? false : true;
    taskElement.classList.toggle("strike");
    console.log(tasks);

    setLocalStorage("todos", tasks);
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

function init() {
    tasks = getLocalStorage("todos");
    renderTasks(tasks);
    setUserName();
}

// Add your event listeners here
document.querySelector("#submitTask").addEventListener("click", newTask);
document.querySelector("#todoList").addEventListener("click", manageTasks);
document.querySelector("#userNameButton").addEventListener("click", userNameHandler);

init();