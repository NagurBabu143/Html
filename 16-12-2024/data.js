const loadButton = document.getElementById("loadUsersButton");
const userList = document.getElementById("userList");
const loadingText = document.getElementById("loadingMessage");
const errorText = document.getElementById("errorMessage");

async function fetchUsers() {
    loadingText.style.display = "block";
    errorText.textContent = "";
    userList.innerHTML = "";

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
        displayError("Failed to load users");
        loadingText.style.display = "none";
        return;
    }
    const users = await response.json();
    displayUsers(users);
    loadingText.style.display = "none";
}

async function fetchUsersWithAxios() {
    loadingText.style.display = "block";
    errorText.textContent = "";
    userList.innerHTML = "";

    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    displayUsers(response.data);
    loadingText.style.display = "none";
}

function displayUsers(users) {
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("userCard");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
        `;
        userList.appendChild(userCard);
    });
}

function displayError(message) {
    errorText.textContent = message;
}

loadButton.addEventListener("click", () => {
    userList.innerHTML = '';
    fetchUsers();
   
});
