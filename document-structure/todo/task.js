document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
  });
  
  const taskInput = document.getElementById("task__input");
  const taskList = document.getElementById("tasks__list");
  
  document.addEventListener("keydown", function (event) {
    if (event.which === 13) {
      const task = document.createElement("div");
      task.classList.add("task");
      const title = document.createElement("div");
      title.classList.add("task__title");
      title.textContent = taskInput.value;
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