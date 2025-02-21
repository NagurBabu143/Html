
function loadTasksToPage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []; 
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; 

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.setAttribute('data-id', task.id);
        li.classList.add('task-item');

        li.innerHTML = `
            <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} />
            <span class="task-text ${task.completed ? 'completed' : ''}">${task.description}</span>
            <button class="edit-btn">Edit</button>
            <button class="delete-btn">Delete</button>
        `;

        taskList.appendChild(li); 
    });
}


function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value.trim();

    if (taskDescription) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const newTask = {
            id: Date.now(), 
            description: taskDescription,
            completed: false
        };
        tasks.push(newTask); 
        saveTasksToLocalStorage(tasks); 
        taskInput.value = ''; 
        loadTasksToPage(); 
    } else {
        alert('Please enter a task!');
    }
}


function editTask(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        const taskListItem = document.querySelector(`[data-id="${taskId}"]`);
        const taskTextSpan = taskListItem.querySelector('.task-text');

        
        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.classList.add('edit-input');
        editInput.value = task.description;

        taskListItem.replaceChild(editInput, taskTextSpan);

       
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.classList.add('save-btn');
        saveButton.addEventListener('click', () => saveTask(taskId, editInput.value));
        taskListItem.appendChild(saveButton);
    }
}


function saveTask(taskId, newDescription) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === taskId);

    if (task && newDescription.trim()) {
        task.description = newDescription.trim(); 
        saveTasksToLocalStorage(tasks); 
        loadTasksToPage(); 
    }
}


function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(t => t.id !== taskId);
    saveTasksToLocalStorage(tasks);
    loadTasksToPage(); 
}


function toggleTaskCompletion(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = tasks.find(t => t.id === taskId);

    if (task) {
        task.completed = !task.completed;
        saveTasksToLocalStorage(tasks); 
        loadTasksToPage(); 
    }
}


function clearAllTasks() {
    if (confirm('Are you sure you want to clear all tasks?')) {
        localStorage.removeItem('tasks'); 
        loadTasksToPage(); 
    }
}


document.getElementById('taskList').addEventListener('click', function (e) {
    const taskId = parseInt(e.target.parentElement.getAttribute('data-id'));

    if (e.target.classList.contains('edit-btn')) {
        editTask(taskId);
    } else if (e.target.classList.contains('delete-btn')) {
        deleteTask(taskId); 
    } else if (e.target.classList.contains('task-checkbox')) {
        toggleTaskCompletion(taskId); 
    }
});

document.getElementById('addTaskBtn').addEventListener('click', addTask);


document.getElementById('clearAllBtn').addEventListener('click', clearAllTasks);


document.addEventListener('DOMContentLoaded', loadTasksToPage);
