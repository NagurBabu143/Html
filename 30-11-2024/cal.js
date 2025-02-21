
function appendValue(value) {
    document.getElementById('result').value += value; // Add value to the display
}


function clearResult() {
    document.getElementById('result').value = ''; // Clear the display
}


function calculate() {
    const input = document.getElementById('result').value; // Get the current input
    let result;

   
    try {
        result = eval(input); 
        document.getElementById('result').value = result; // Display the result
    } catch (error) {
        document.getElementById('result').value = 'Error'; // Display error if evaluation fails
    }
}
