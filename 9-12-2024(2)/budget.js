const incomeForm = document.getElementById('income-form');
const entryForm = document.getElementById('entry-form');
const categoryFilter = document.getElementById('category-filter');
const entryList = document.getElementById('entry-list');
const clearAllButton = document.getElementById('clear-all');

const totalIncomeElement = document.getElementById('total-income');
const totalBalanceElement = document.getElementById('total-balance');
const totalExpensesElement = document.getElementById('total-expenses');

let totalIncome = 0;
let totalExpenses = 0;
let entries = [];

function loadData() {
    entries = JSON.parse(localStorage.getItem('budgetEntries')) || [];
    totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
    totalExpenses = parseFloat(localStorage.getItem('totalExpenses')) || 0;

    entries.forEach(entry => totalExpenses += entry.amount);
    updateDisplay();
    renderEntries('All');
}

function saveData() {
    localStorage.setItem('budgetEntries', JSON.stringify(entries));
    localStorage.setItem('totalIncome', totalIncome);
    localStorage.setItem('totalExpenses', totalExpenses);
}

function updateDisplay() {
    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalBalanceElement.textContent = (totalIncome - totalExpenses).toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
}

function renderEntries(filterCategory) {
    entryList.innerHTML = '';
    const filteredEntries = (filterCategory === 'All') ? entries : entries.filter(entry => entry.category === filterCategory);

    filteredEntries.forEach((entry, index) => {
        const li = document.createElement('li');
        li.textContent = `${entry.description} - ${entry.amount} INR (${entry.category})`;

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editEntry(index);
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteEntry(index);
        li.appendChild(deleteButton);

        entryList.appendChild(li);
    });
}

incomeForm.addEventListener('submit', event => {
    event.preventDefault();
    totalIncome = parseFloat(document.getElementById('total-income-input').value);
    document.getElementById('total-income-input').value = '';
    saveData();
    updateDisplay();
});

entryForm.addEventListener('submit', event => {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (!isNaN(amount)) {
        totalExpenses += amount;
        entries.push({ description, amount, category });
        saveData();
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
        renderEntries(categoryFilter.value);
        updateDisplay();
    }
});

categoryFilter.addEventListener('change', () => renderEntries(categoryFilter.value));

clearAllButton.addEventListener('click', () => {
    entries = [];
    totalExpenses = 0;
    totalIncome = 0;
    localStorage.clear();
    updateDisplay();
    renderEntries(categoryFilter.value);
});

function editEntry(index) {
    const entry = entries[index];
    document.getElementById('description').value = entry.description;
    document.getElementById('amount').value = entry.amount;
    document.getElementById('category').value = entry.category;
    deleteEntry(index);
}

function deleteEntry(index) {
    totalExpenses -= entries[index].amount;
    entries.splice(index, 1);
    saveData();
    renderEntries(categoryFilter.value);
    updateDisplay();
}

loadData();
