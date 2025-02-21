let enter_budget = document.getElementById("enter_budget");
let budget_amt = document.getElementById("budget_amt");
let enter_exp = document.getElementById("enter_exp");
let exp_name = document.getElementById("exp_name");
let exp_amt = document.getElementById("exp_amt");
let bud = document.getElementById("bud");
let exp = document.getElementById("exp");
let balance = document.getElementById("balance");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");
let modify_elem = document.getElementById("modify");
let clear_all = document.getElementById("clear_all");

const toStorage = (what, { budget, exp_name, exp_amt, old_name } = {}) => {
    if (typeof Storage !== undefined) {
        let user = localStorage.getItem("user");
        if (!user) {
            localStorage.setItem("user", JSON.stringify({ budget: 0, expenses: [], modify: new Date().toLocaleString() }));
        }
        user = JSON.parse(localStorage.getItem("user"));

        if (what === "updateBudget") {
            localStorage.setItem("user", JSON.stringify({ ...user, budget, modify: new Date().toLocaleString() }));
        } else if (what === "addExpense") {
            if (user.expenses.some((obj) => obj.name === exp_name)) {
                alert(`${exp_name} already exists.`);
            } else {
                user.expenses.push({ name: exp_name, amt: exp_amt });
                localStorage.setItem("user", JSON.stringify({ ...user, modify: new Date().toLocaleString() }));
            }
        } else if (what === "updateExpense") {
            user.expenses = user.expenses.map((val) =>
                val.name === old_name ? { name: exp_name, amt: exp_amt } : val
            );
            localStorage.setItem("user", JSON.stringify({ ...user, modify: new Date().toLocaleString() }));
        } else if (what === "load") {
            modify_elem.innerText = `Last Modified: ${user.modify}`;
            bud.innerText = `₹${user.budget}`;
            let total_bal = user.budget;
            let exp_amount = 0;

            if (user.expenses.length > 0) {
                table.classList.remove("d-none");
                tbody.innerHTML = "";
                user.expenses.forEach((val) => {
                    tbody.insertAdjacentHTML(
                        "beforeend",
                        `<tr id="row-${val.name}">
                            <td>${val.name}</td>
                            <td>${val.amt}</td>
                            <td>
                                <button class='btn btn-green' onclick="updateExp('${val.name}', '${val.amt}')">Edit</button>
                                <button class='btn btn-red' onclick="deleteExp('${val.name}')">Delete</button>
                            </td>
                        </tr>`
                    );
                    exp_amount += Number(val.amt);
                    total_bal -= val.amt;
                });
            } else {
                table.classList.add("d-none");
            }

            exp.innerText = `₹${exp_amount}`;
            balance.innerText = `₹${total_bal}`;
            balance.classList.toggle("red", total_bal < 0);
            balance.classList.toggle("green", total_bal >= 0);
        } else if (what === "delete") {
            user.expenses = user.expenses.filter((val) => val.name !== exp_name);
            localStorage.setItem("user", JSON.stringify({ ...user, modify: new Date().toLocaleString() }));
        } else if (what === "clear") {
            localStorage.removeItem("user");
        }
    } else {
        alert("Your browser does not support localStorage.");
    }
};

toStorage("load");

const updateExp = (name, amt) => {
    enter_exp.dataset.task = "updateExpense";
    enter_exp.dataset.old = name;
    enter_exp.lastElementChild.innerText = "Update";
    exp_name.value = name;
    exp_amt.value = amt;
};

const deleteExp = (exp_name) => {
   
    toStorage("delete", { exp_name });
   
    const row = document.getElementById(`row-${exp_name}`);
    if (row) {
        row.remove();
    }
    
    toStorage("load");
};

clear_all.addEventListener("click", () => {
    if (confirm("Are you sure you want to clear all data?")) {
        toStorage("clear");
        tbody.innerHTML = ""; 
        toStorage("load");
    }
});

enter_budget.addEventListener("submit", (e) => {
    e.preventDefault();
    if (budget_amt.value === "") {
        alert("Please enter a budget.");
    } else {
        toStorage("updateBudget", { budget: Math.abs(budget_amt.value) });
        toStorage("load");
    }
    enter_budget.reset();
});

enter_exp.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = enter_exp.dataset.task;
    const old_name = enter_exp.dataset.old;
    if (!exp_name.value.trim()) {
        alert("Please enter an expense name.");
    } else if (!exp_amt.value) {
        alert("Please enter an expense amount.");
    } else {
        toStorage(task, { old_name, exp_name: exp_name.value.trim(), exp_amt: exp_amt.value.trim() });
        toStorage("load");
        if (task === "updateExpense") {
            enter_exp.dataset.task = "addExpense";
            enter_exp.dataset.old = "0";
            enter_exp.lastElementChild.innerText = "Add Expense";
        }
        enter_exp.reset();
    }
});
