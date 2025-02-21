let timerInterval;
let startTime;
let elapsedTime = 0;
let running = false;
const lapTimes = [];

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const milliseconds = String(ms % 1000).padStart(3, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

startStopBtn.addEventListener('click', () => {
    if (running) {
        clearInterval(timerInterval);
        startStopBtn.textContent = 'Start'; 
    } else {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
        startStopBtn.textContent = 'Stop';
    }
    running = !running;
});

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    display.textContent = '00:00:000';
    startStopBtn.textContent = 'Start';
    running = false;
    lapTimes.length = 0;
    document.getElementById('lapTimes').innerHTML = '';
});

document.getElementById('lapBtn').onclick = function() {
    if (running) {
        const currentLapTime = elapsedTime;
        lapTimes.push(currentLapTime);
        const lapDisplay = document.createElement('div');
        lapDisplay.textContent = `Lap: ${formatTime(currentLapTime)}`;
        document.getElementById('lapTimes').appendChild(lapDisplay);
    }
};
