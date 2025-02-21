document.body.style.backgroundColor = "red";
document.body.style.textAlign = "center";
document.body.style.color = "white";

const outer = document.getElementById("outer");
const middle = document.getElementById("middle");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => {
  console.log("Outer Div Clicked (Bubbling)");
});

middle.addEventListener("click", () => {
  console.log("Middle Div Clicked (Bubbling)");
});

inner.addEventListener("click", (event) => {
  console.log("Inner Div Clicked");
  event.stopPropagation();
});

// outer.addEventListener('click', function () {
//     console.log('Outer Div (Capturing)');
// }, true);

// middle.addEventListener('click', function () {
//     console.log('Middle Div (Capturing)');
// }, true);

// inner.addEventListener('click', function () {
//     console.log('Inner Div (Capturing)');
// }, true);



// outer.addEventListener("click", () => {
//     console.log("Outer Div Clicked (Bubbling)");
//   },false);
  
//   middle.addEventListener("click", () => {
//     console.log("Middle Div Clicked (Bubbling)");
//   },false);
  
//   inner.addEventListener("click", (event) => {
//     console.log("Inner Div Clicked");
//     event.stopPropagation();
//   },false);

const parent = document.getElementById("parent");
const outerButton = document.getElementById("outerButton");
const innerButton = document.getElementById("innerButton");

parent.addEventListener("click", () => {
  console.log("Event: Parent Div clicked!");
});

outerButton.addEventListener("click", (event) => {
  console.log("Event: Outer Button clicked!");
  event.stopPropagation();
  console.log("Propagation stopped at Outer Button.");
});

innerButton.addEventListener("click", () => {
  console.log("Event: Inner Button clicked!");
});










