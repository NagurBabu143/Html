document.body.style.background = "red"
const dataForm = document.getElementById('dataForm');
const nameInput = document.getElementById('name');
const descriptionInput = document.getElementById('description');
const priceInput = document.getElementById('price');
const categoryInput = document.getElementById('category');
const quantityInput = document.getElementById('quantity');
const statusInput = document.getElementById('status');
const dataTableBody = document.querySelector('#dataTable tbody');

let data = JSON.parse(localStorage.getItem('data')) || [];
let editIndex = null;

function renderTable() {
    dataTableBody.innerHTML = '';
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.price}</td>
            <td>${item.category}</td>
            <td>${item.quantity}</td>
            <td>${item.status}</td>
            <td>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </td>
        `;
        dataTableBody.appendChild(row);
    });
}

function addOrEditRow() {
    const name = nameInput.value.trim();
    const description = descriptionInput.value.trim();
    const price = parseFloat(priceInput.value.trim());
    const category = categoryInput.value.trim();
    const quantity = parseInt(quantityInput.value.trim(), 10);
    const status = statusInput.value.trim();

    if (!name || !description || isNaN(price) || !category || isNaN(quantity) || !status) {
        alert("Please fill out all fields correctly.");
        return;
    }

    if (editIndex !== null) {
        data[editIndex] = { name, description, price, category, quantity, status };
        editIndex = null;
    } else {
        data.push({ name, description, price, category, quantity, status });
    }

    localStorage.setItem('data', JSON.stringify(data));
    renderTable();
    resetForm();
}

function resetForm() {
    nameInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';
    categoryInput.value = '';
    quantityInput.value = '';
    statusInput.value = '';
}

dataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addOrEditRow();
});

dataTableBody.addEventListener('click', (e) => {
    const index = e.target.dataset.index;

    if (e.target.classList.contains('edit-btn')) {
        const item = data[index];
        nameInput.value = item.name;
        descriptionInput.value = item.description;
        priceInput.value = item.price;
        categoryInput.value = item.category;
        quantityInput.value = item.quantity;
        statusInput.value = item.status;
        editIndex = index;
    } else if (e.target.classList.contains('delete-btn')) {
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        renderTable();
    }
});

renderTable();
