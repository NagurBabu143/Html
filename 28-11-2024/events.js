document.body.style.backgroundColor = "red";
const h1 = document.createElement('h1');
h1.innerHTML = "Events";
h1.style.textAlign = "center";
document.body.appendChild(h1);

const div = document.createElement("div");
div.style.maxWidth = "600px";
div.style.margin = "20px auto";
div.style.padding = "20px";
div.style.backgroundColor = "orange";
div.style.border = "1px solid #ccc";
div.style.borderRadius = "10px";

document.body.appendChild(div);

const paragraph = document.createElement("p");
paragraph.textContent = "Initial Text";
div.appendChild(paragraph);

const button = document.createElement("button");
button.textContent = "Click Me";
button.style.padding = "10px 15px";
button.style.border = "none";
button.style.borderRadius = "5px";
button.style.backgroundColor = "#007bff";
button.style.color = "white";
button.style.cursor = "pointer";
button.style.margin = "10px 0";
button.style.transition = "background-color 0.3s";


const buttonOriginalText = button.textContent;
const buttonClickedText = "Clicked!";

button.addEventListener("click", () => {
  
  if (button.textContent === buttonOriginalText) {
    button.textContent = buttonClickedText;
    paragraph.textContent = "Button clicked!";
  } else {
    button.textContent = buttonOriginalText;
    paragraph.textContent = "Initial Text";
  }
  
  console.log(`Button clicked! Current state: ${button.textContent}`);
});
div.appendChild(button);

const input = document.createElement("input");
input.setAttribute("type", "text");
input.style.padding = "10px";
input.style.border = "1px solid #ccc";
input.style.borderRadius = "5px";
input.style.width = "100%";
input.style.boxSizing = "border-box";

div.appendChild(input);

const keyDiv = document.createElement("div");
keyDiv.style.marginTop = "10px";
keyDiv.style.fontWeight = "bold";
div.appendChild(keyDiv);

input.addEventListener("keypress", (event) => {
  keyDiv.textContent = `Key Pressed: ${event.key}`;
  console.log(`Key Pressed: ${event.key}`);
});

const ul = document.createElement("ul");
ul.style.listStyle = "none";
ul.style.padding = "0";
ul.style.marginTop = "20px";

const items = ["Nagur", "Babu", "Shaik"];
items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  li.style.cursor = "pointer";
  li.style.margin = "5px 0";
  li.style.padding = "10px";
  li.style.border = '3px solid red';
  li.style.textAlign = "center";
  

  
  const originalText = item; 
  const clickedText = "Clicked!"; 

  
  li.addEventListener("click", () => {
    if (li.textContent === clickedText) {
      li.textContent = originalText; 
      console.log(`List item clicked: ${li.textContent}`);
    } else {
      li.textContent = clickedText; 
      console.log(`List item clicked: ${clickedText}`);
    }
  });

  ul.appendChild(li);
});
div.appendChild(ul);
