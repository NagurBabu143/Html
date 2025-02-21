// const inputField = document.getElementById("myInput");

// inputField.addEventListener("input", function () {
//   console.log(inputField.value);
// });

// const pp = document.getElementById("p");

// inputField.addEventListener("input", function () {
//   pp.textContent = inputField.value;
//   console.log(pp);
// });

// const color = document.getElementById("colorInput");

// color.addEventListener("input", function() {

//     document.body.style.backgroundColor = color.value;
// });

// const para = document.getElementById("para");

// color.addEventListener("input",function(){
//     para.textContent = color.value;
//     console.log(para);
// })

// const messageSelect = document.getElementById("messageSelect");
// const messageDisplay = document.getElementById("messageDisplay");

// messageSelect.addEventListener("change", function () {

//   messageDisplay.textContent = messageSelect.value;
//   console.log(messageDisplay)
// });





const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");


textInput.addEventListener("keyup", function () {
 
  charCount.textContent = "Character count: " + textInput.value.length;
  console.log(charCount)  
  console.log(textInput.value.length)
});





// function showValue() {

//     let value = document.getElementById('myInput').value;

//     document.getElementById('output').textContent = value;
// }
