const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.classList.add("task");

    li.innerHTML = `
        <div class="task-left">
            <input type="checkbox">
            <span>${taskText}</span>
        </div>

        <button class="delete-btn">×</button>
    `;

    const checkbox = li.querySelector("input");

    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });

    const deleteBtn = li.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    taskList.appendChild(li);

    taskInput.value = "";

    updateTaskCount();
}

function updateTaskCount() {

    const tasks = document.querySelectorAll(".task");

    taskCount.textContent =
        `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
}