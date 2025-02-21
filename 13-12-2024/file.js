document.body.style.backgroundColor = "red"
const uploadForm = document.getElementById('uploadForm');
const fileInput = document.getElementById('fileInput');
const messageDiv = document.getElementById('message');
const loadingDiv = document.getElementById('loading');
const fileListDiv = document.getElementById('fileList');

uploadForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const files = fileInput.files;
    displaySelectedFiles(files);
    messageDiv.textContent = ''; 
    loadingDiv.style.display = 'block'; 
    
   
    Array.from(files).forEach(file => {
        simulateFileUpload(file)
            .then(response => {
                messageDiv.textContent += `${response} (${file.name})\n`; 
                messageDiv.style.color = 'green';
            })
            .catch(error => {
                messageDiv.textContent += `${error} (${file.name})\n`; 
                messageDiv.style.color = 'red';
            })
           
    });
});

function displaySelectedFiles(files) {
    fileListDiv.innerHTML = '<strong>Selected Files:</strong><br>';
    Array.from(files).forEach(file => {
        fileListDiv.innerHTML += `- ${file.name}<br>`;
    });
}

function simulateFileUpload(file) {
    return new Promise((resolve, reject) => {
        
        setTimeout(() => {
            
            const isSuccess = Math.random() > 0.3; 
            if (isSuccess) {
                resolve("File uploaded successfully!");
            } else {
                reject("File upload failed.");
            }
        }, 3000); 
    });
}
