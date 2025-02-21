let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
let completedCount = parseInt(localStorage.getItem("completedCount")) || 0;
let pendingCount = parseInt(localStorage.getItem("pendingCount")) || 0;

const addTask = document.getElementById("addTask");
const completedCountDisplay = document.getElementById("completedCount");
const pendingCountDisplay = document.getElementById("pendingCount");

addTask.addEventListener("click", addTodoItem);

function initializeTodoList() {
  let list = document.getElementById("todoList");
  todoList.forEach((task) => {
    createTodoItem(task.text, task.completed, list);
  });
  updateCounts();
}

function addTodoItem() {
  let item = document.getElementById("todoInput").value;
  if (item.trim() === "") return;

  const task = { text: item, completed: false };
  todoList.push(task);
  pendingCount++;
  updateLocalStorage();
  updateCounts();

  let list = document.getElementById("todoList");
  createTodoItem(item, false, list);

  document.getElementById("todoInput").value = "";
}

function createTodoItem(item, completed, list) {
  let listItem = document.createElement("div");
  listItem.className = "todoItem";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;
  if (completed) {
    listItem.classList.add("checked");
  }

  let itemText = document.createElement("span");
  itemText.textContent = item;

  checkbox.onclick = function () {
    const taskIndex = todoList.findIndex((task) => task.text === item);
    if (checkbox.checked) {
      itemText.style.textDecoration = "line-through";
      listItem.classList.add("checked");
      completedCount++;
      pendingCount--;
      todoList[taskIndex].completed = true;
    } else {
      itemText.style.textDecoration = "none";
      listItem.classList.remove("checked");
      completedCount--;
      pendingCount++;
      todoList[taskIndex].completed = false;
    }
    updateLocalStorage();
    updateCounts();
  };

  listItem.appendChild(checkbox);
  listItem.appendChild(itemText);

  let buttonsDiv = document.createElement("div");
  listItem.appendChild(buttonsDiv);

  let editButton = document.createElement("button");
  editButton.innerHTML = '<i class="fas fa-edit"></i>';
  editButton.onclick = function () {
    itemText.contentEditable = true;
    itemText.focus();
  };
  buttonsDiv.appendChild(editButton);

  itemText.onblur = function () {
    itemText.contentEditable = false;
    const taskIndex = todoList.findIndex((task) => task.text === item);
    todoList[taskIndex].text = itemText.textContent;
    updateLocalStorage();
  };

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButton.onclick = function () {
    const taskIndex = todoList.findIndex((task) => task.text === item);
    if (checkbox.checked) {
      completedCount--;
    } else {
      pendingCount--;
    }
    todoList.splice(taskIndex, 1);
    list.removeChild(listItem);
    updateLocalStorage();
    updateCounts();
  };
  buttonsDiv.appendChild(deleteButton);

  list.appendChild(listItem);

  if (completed) {
    itemText.style.textDecoration = "line-through";
  }
}

function updateCounts() {
  completedCountDisplay.textContent = completedCount;
  pendingCountDisplay.textContent = pendingCount;
}

function updateLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
  localStorage.setItem("completedCount", completedCount);
  localStorage.setItem("pendingCount", pendingCount);
}


initializeTodoList();
