let currentColor = 0;

const btn = document.getElementById("colorButton");
btn.addEventListener("click", function () {
  let newColor = "";

  switch (currentColor) {
    case 0:
      newColor = "red";
     
      break;
    case 1:
      newColor = "blue";
      break;
    case 2:
      newColor = "green";
      break;
    case 3:
      newColor = "yellow";
      break;
    case 4:
      newColor = "purple";
      break;
    case 5:
      newColor = "orange";
      break;
    default:
      newColor = "white";
  }

  document.body.style.backgroundColor = newColor;

  currentColor++;
  if (currentColor > 5) {
    currentColor = 0;
  }
  console.log("theme:",newColor);
});
