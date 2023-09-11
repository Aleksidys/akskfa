
const taskInput = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");
const addBtn = document.getElementById("tasks__add");

addBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const task = document.createElement("div");
    task.classList.add("task");
    const title = document.createElement("div");
    title.classList.add("task__title");
    title.textContent = taskText;
    const removeBtn = document.createElement("a");
    removeBtn.classList.add("task__remove");
    removeBtn.textContent = "×";
    removeBtn.href = "#";
    removeBtn.addEventListener("click", function () { 
      task.remove(); 
    });
    task.appendChild(title);
    task.appendChild(removeBtn);
    taskList.appendChild(task);
    taskInput.value = "";
  }
});
