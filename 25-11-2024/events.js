//
 //
 document.body.style.padding = '100px';
 document.body.style.height = '400px';
 document.body.style.marginBottom = '15px';
 document.body.style.border = '2px solid red';
 document.body.style.backgroundColor = 'red';
 document.body.style.borderRadius = '5px';
 document.body.style.textAlign = 'center';
 
 const h1=document.querySelector('h1');
 



// function addItem() {
//     const list = document.getElementById("myList");
   
//     const newItem = document.createElement("li");
//     newItem.textContent = "Nagur";
//     newItem.style.color = 'white';
//     list.appendChild(newItem);
// }



// let count = 0;
// function incrementCounter() {
//     count++;
//     document.getElementById("counter").textContent = count;
// }



// function removeElement() {
//     const textElement = document.getElementById("text");
//     textElement.remove();
// }


// //onmouseover and onmouseout



// document.getElementById("hoverDiv").onmouseover = function () {
//     this.style.backgroundColor = "lightblue";
// };
// document.getElementById("hoverDiv").onmouseout = function () {
//     this.style.backgroundColor = "white";
// };


// document.getElementById("hoverButton").onmouseover = function () {
//     document.getElementById("hiddenText").style.display = "block";
// };
// document.getElementById("hoverButton").onmouseout = function () {
//     document.getElementById("hiddenText").style.display = "none";
// };


// document.getElementById("hoverText").onmouseover = function () {
//     this.style.fontSize = "24px";
// };
// document.getElementById("hoverText").onmouseout = function () {
//     this.style.fontSize = "16px";
// };


// document.getElementById("hoverImage").onmouseover = function () {
//     this.src = "image2.jpg";
// };
// document.getElementById("hoverImage").onmouseout = function () {
//     this.src = "image1.jpg";
// };




// //onsubmit


// function confirmSubmit() {
//     return confirm("Are you sure you want to submit?");
// }







// function validateEmail() {
//     const email = document.getElementById("emailInput").value;
//     if (!email.includes("@gmail") || !email.includes(".com")) {
//         alert("Please enter a valid email address!");
//         return false; 
//     }
//     return true; 
// }


// //onchange



function changeBackgroundColor() {
    const color = document.getElementById("colorSelect").value;
    document.body.style.backgroundColor = color;
}




// //addEventListener







const button = document.getElementById("eventButton");

button.addEventListener("click", function() {
    console.log("First click handler.");
});

button.addEventListener("click", function() {
    console.log("Second click handler.");
});



const div = document.getElementById("hoverDiv");

div.addEventListener("mouseover", function() {
    div.style.backgroundColor = "green";
});

div.addEventListener("mouseout", function() {
    div.style.backgroundColor = "blue";
});


