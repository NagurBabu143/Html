document.body.style.backgroundColor = "red";
const tasks = [
    { taskName: "Task 1", duration: 5, completed: false },
    { taskName: "Task 2", duration: 8, completed: false },
    { taskName: "Task 3", duration: 3, completed: false },
    { taskName: "Task 4", duration: 6, completed: false },
    { taskName: "Task 5", duration: 4, completed: false },
    { taskName: "Task 6", duration: 7, completed: false },
    { taskName: "Task 7", duration: 2, completed: false },
    { taskName: "Task 8", duration: 10, completed: false },
];

let interval;
let timeoutIds = [];

function startTimer() {
    tasks.forEach((task, index) => {
        const timeoutId = setTimeout(() => {
            task.completed = true;
        }, task.duration * 1000);
        timeoutIds.push(timeoutId);
    });

    interval = setInterval(() => {
       const log2 =  document.getElementById("log")
       log2.innerHTML = "";
        tasks.forEach(task => {
            const log1 = document.getElementById("log");
            log1.innerHTML += `${task.taskName}: ${task.completed ? "Completed" : "Pending"}<br>`;
        });
    }, 2000);
}

function stopTimer() {
    clearInterval(interval);
    timeoutIds.forEach(id => clearTimeout(id));
    const log3 = document.getElementById("log");
    log3.innerHTML += "Timer stopped manually.<br>";
}

function resetTimer() {
    stopTimer();
    tasks.forEach(task => {
        task.completed = false;
    });
   const log4 = document.getElementById("log")
   log4.innerHTML = "";
   const log5 = document.getElementById("log")
   log5.innerHTML += "Timer reset.<br>";
}

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startTimer);
const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTimer);
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetTimer);
