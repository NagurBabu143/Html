document.body.style.backgroundColor = "red";
document.body.style.textAlign = "center"; 
document.body.style.color = "white";
const form = document.getElementById("nameForm")
form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById("nameInput").value; 

    if (nameInput.trim() === "") { 
        alert("Please enter a valid name."); 
    } else {

        const tableBody = document.getElementById("nameTableBody");
        const newRow = document.createElement("tr");
        const newCell = document.createElement("td");
        newCell.textContent = nameInput; 
        newRow.appendChild(newCell); 
        tableBody.appendChild(newRow); 
        
        document.getElementById("nameInput").value = ""; 
    }
});