function addTask(){

let input = document.getElementById("taskInput");
let taskText = input.value;

if(taskText === ""){
alert("Please enter a task");
return;
}

let li = document.createElement("li");

li.innerHTML = `
<span onclick="completeTask(this)">✔ ${taskText}</span>
<button onclick="deleteTask(this)">🗑</button>
`;

document.getElementById("taskList").appendChild(li);

saveTasks();

input.value = "";

}

function completeTask(task){
task.classList.toggle("completed");
saveTasks();
}

function deleteTask(button){
button.parentElement.remove();
saveTasks();
}

function saveTasks(){
let taskList = document.getElementById("taskList").innerHTML;
localStorage.setItem("tasks", taskList);
}

function loadTasks(){
let savedTasks = localStorage.getItem("tasks");

if(savedTasks){
document.getElementById("taskList").innerHTML = savedTasks;
}
}

loadTasks();
