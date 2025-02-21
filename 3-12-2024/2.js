function saveToLocalStorage() {
    const taskInput = document.getElementById('taskInput').value.trim();

    if (taskInput) {
       
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskInput);
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
        document.getElementById('taskInput').value = ''; 
        loadTasksToPage(); 
    } else {
        alert('Please enter a value!');
    }
}

function loadTasksToPage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const outputElement = document.getElementById('taskOutput');
    outputElement.innerHTML = ''; 

    tasks.forEach((task, index) => {
        
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            ${task}
            <button onclick="editTaskInLocalStorage(${index})">Edit</button>
            <button onclick="removeTaskFromLocalStorage(${index})">Remove</button>
        `;
        outputElement.appendChild(taskItem);
    });

    if (tasks.length === 0) {
        outputElement.textContent = 'No tasks found in localStorage.';
    }
}

function removeTaskFromLocalStorage(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); 
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
    loadTasksToPage(); 
}

function editTaskInLocalStorage(index) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newTask = prompt('Edit your task:', tasks[index]);

    if (newTask) {
        tasks[index] = newTask.trim(); 
        localStorage.setItem('tasks', JSON.stringify(tasks)); 
        loadTasksToPage(); 
    }
}


document.addEventListener('DOMContentLoaded', loadTasksToPage);
document.getElementById('addTaskBtn').addEventListener('click', saveToLocalStorage);
