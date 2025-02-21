function saveToLocalStorage() {
    const taskInput = document.getElementById('taskInput').value.trim();

    if (taskInput) {
        localStorage.setItem('task', taskInput);
        alert('Task saved to localStorage!');
        document.getElementById('taskInput').value = '';
        loadTaskToPage();
    } else {
        alert('Please enter a value!');
    }
}

function loadTaskToPage() {
    const loadedTask = localStorage.getItem('task');
    const outputElement = document.getElementById('taskOutput');

    if (loadedTask) {
        outputElement.textContent = 'Current Task: ' + loadedTask;
    } else {
        outputElement.textContent = 'No task found in localStorage.';
    }
}

function removeFromLocalStorage() {
    localStorage.removeItem('task');
    alert('Task removed from localStorage!');
    loadTaskToPage();
}

function editTaskInLocalStorage() {
    const loadedTask = localStorage.getItem('task');

    if (loadedTask) {
        const newTask = prompt('Edit your task:', loadedTask);
        if (newTask !== null && newTask.trim() !== '') {
            localStorage.setItem('task', newTask.trim());
            alert('Task updated successfully!');
            loadTaskToPage();
        } else {
            alert('Task was not updated. Please enter a valid value.');
        }
    } else {
        alert('No task found to edit!');
    }
}


function deleteTaskInLocalStorage() {
    const loadedTask = localStorage.getItem('task');

    if (loadedTask) {
        const confirmDelete = confirm('Are you sure you want to delete your task: "' + loadedTask + '"?');
        if (confirmDelete) {
            localStorage.removeItem('task'); 
            alert('Task deleted successfully!');
            loadTaskToPage(); 
        }
    } else {
        alert('No task found to delete!');
    }
}







document.addEventListener('DOMContentLoaded', loadTaskToPage);


document.getElementById('addTaskBtn').addEventListener('click', saveToLocalStorage);
document.getElementById('removeTaskBtn').addEventListener('click', removeFromLocalStorage);
document.getElementById('editTaskBtn').addEventListener('click', editTaskInLocalStorage);
document.getElementById('deleteTaskBtn').addEventListener('click', deleteTaskInLocalStorage);
