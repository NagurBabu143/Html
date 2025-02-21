document.body.style.backgroundColor = "red"
let animationInterval;
let position = 0; 

document.getElementById('startButton').addEventListener('click', startAnimation);
document.getElementById('resetButton').addEventListener('click', resetAnimation);

function startAnimation() {
    const box = document.getElementById('box');
    const speed = parseInt(document.getElementById('speedInput').value); 
    const size = parseInt(document.getElementById('sizeInput').value);

    box.style.width = size + 'px'; 
    box.style.height = size + 'px'; 

    const screenWidth = window.innerWidth; 

    
    clearInterval(animationInterval);

    animationInterval = setInterval(() => {
        if (position < screenWidth - size) {
            position += 5; 
            box.style.left = position + 'px';
        } else {
            clearInterval(animationInterval); 
        }
    }, speed);

   
    setInterval(() => {
        console.log("Event loop is active");
    }, 2000);
}

function resetAnimation() {
    clearInterval(animationInterval); 
    position = 0; 
    document.getElementById('box').style.left = position + 'px'; 
}
