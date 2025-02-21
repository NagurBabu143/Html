document.body.style.backgroundColor = "red";
const outputArea = document.getElementById("output");

function displayMessage(message) {
    outputArea.innerHTML += message + "<br>";
}

function sendReminder() {
    setTimeout(() => {
        displayMessage("Reminder: Your meeting starts now!");
    }, 5000);
}

function startHeartbeat() {
    const intervalId = setInterval(() => {
        displayMessage("Checking user status...");
    }, 3000);

    setTimeout(() => {
        clearInterval(intervalId);
        displayMessage("System check completed");
    }, 15000);
}

const Reminder = document.getElementById("startReminderButton")
Reminder.onclick = () => {
    sendReminder();
};

const Heartbeat = document.getElementById("startHeartbeatButton")
Heartbeat.onclick = () => {
    startHeartbeat();
};