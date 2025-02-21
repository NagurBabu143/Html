document.body.style.backgroundColor = "red";
document.body.style.textAlign = "center";
document.body.style.color = "white";

const form = document.getElementById("nameForm");
  form.style.margin = "10px 0"
    form.style.padding = "5px"
form.addEventListener("submit", function (event) {
  const nameInput = document.getElementById("nameInput").value; 
  
  if (nameInput === "") {
    event.preventDefault();
    alert("Please enter your name.");
    
  } else {
    alert(`Hello, ${nameInput}!`);
   
  }
 
});



const form1 = document.getElementById("myForm");
form1.style.margin = "5px 0"
form1.style.padding = "2px"
form1.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Form submission done !");

});



const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Checkbox clicked!");
});









