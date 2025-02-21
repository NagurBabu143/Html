var selectedRow = null;
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null) {
            insertNewRecord(formData);
        } else {
            updateRecord(formData);
        }
        saveToLocalStorage();
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value;
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
    saveToLocalStorage();
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        var row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        saveToLocalStorage();
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}


function saveToLocalStorage() {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var rows = table.rows;
    var data = [];
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var record = {
            fullName: row.cells[0].innerHTML,
            empCode: row.cells[1].innerHTML,
            salary: row.cells[2].innerHTML,
            city: row.cells[3].innerHTML
        };
        data.push(record);
    }
    localStorage.setItem("employeeData", JSON.stringify(data));
}

function loadTableData() {
    var data = localStorage.getItem("employeeData");
    if (data) {
        var employeeData = JSON.parse(data);
        var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
        table.innerHTML = ""; 
        employeeData.forEach(record => {
            var newRow = table.insertRow(table.rows.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = record.fullName;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = record.empCode;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = record.salary;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = record.city;
            cell5 = newRow.insertCell(4);
            cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a> 
                               <a onClick="onDelete(this)">Delete</a>`;
        });
    }
}
