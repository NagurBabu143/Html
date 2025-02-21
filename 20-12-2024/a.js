 document.body.style.backgroundColor = "red";
 const outputDiv = document.getElementById('output');

const Variables1= document.getElementById('runVariables')
Variables1.addEventListener('click', () => {
    outputDiv.innerText += "Variables:\n";
    let age = 20;
    const name = "Nagur";
    outputDiv.innerText += `Name: ${name}, Age: ${age}\n`;
});

const Loops = document.getElementById('runLoops')
Loops.addEventListener('click', () => {
    outputDiv.innerText += "For Loop:\n";
    for (let i = 0; i <= 5; i++) {
        outputDiv.innerText += `${i}\n`;
    }

    outputDiv.innerText += "Array forEach:\n";
    const items = ["apple", "banana", "cherry"];
    items.forEach(item => outputDiv.innerText += `${item}\n`);
});

const Functions = document.getElementById('runFunctions')
Functions.addEventListener('click', () => {
    outputDiv.innerText += "Function Example:\n";
    function Name(name) {
        return `Hello, ${name}!`;
    }
    outputDiv.innerText += Name("Nagur") + '\n';
});

const Promise1 = document.getElementById('runPromises')
Promise1.addEventListener('click', () => {
    outputDiv.innerText += "Promise Example:\n";
    const promise = new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    });
    
    promise
        .then(result => {
            outputDiv.innerText += result + '\n';
        })
        .catch(error => {
            outputDiv.innerText += error + '\n';
        });
});

const Async=document.getElementById('runAsyncAwait')
Async.addEventListener('click', async () => {
    outputDiv.innerText += "Async/Await Example:\n";
    try {
        let data = await new Promise((resolve) => setTimeout(() => resolve("Data Loaded!"), 2000));
        outputDiv.innerText += data + '\n';
    } catch (error) {
        outputDiv.innerText += error + '\n';
    }
});

const user1 =  document.getElementById('User')
user1.addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value;
    outputDiv.innerText += `Hello, ${nameInput}!\n`;
});



