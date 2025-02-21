const button = document.getElementById("theme");
const body = document.body;

let theme = 0;

body.style.backgroundColor = "white";
body.style.color = "black";

button.addEventListener("click", function () {
  theme++;

  if (theme === 1) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    button.textContent = "Switch to Blue Theme";
  } else if (theme === 2) {
    body.style.backgroundColor = "#007BFF";
    body.style.color = "white";
    button.textContent = "Switch to Green Theme";
  } else if (theme === 3) {
    body.style.backgroundColor = "green";
    body.style.color = "white";
    button.textContent = "Switch to Yellow Theme";
  } else if (theme === 4) {
    body.style.backgroundColor = "yellow";
    body.style.color = "black";
    button.textContent = "Switch to Purple Theme";
  } else if (theme === 5) {
    body.style.backgroundColor = "purple";
    body.style.color = "white";
    button.textContent = "Switch to Light Theme";
  } else {
    theme = 0;
    body.style.backgroundColor = "white";
    body.style.color = "black";
    button.textContent = "Switch to Dark Theme";
  }
  console.log("theme:", button);
});
