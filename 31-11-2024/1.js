document.body.style.backgroundColor = "red"
document.body.style.textAlign = "center"
document.body.style.color = "white";
const menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log(`You clicked on: ${event.target.textContent}`);
  }
});

const container = document.getElementById('buttonContainer');

container.addEventListener('click', (event) => {
  if (event.target.classList.contains('dynamic-btn')) {
    console.log(`You clicked on: ${event.target.textContent}`);
  }
});

const table = document.getElementById('dataTable');

table.style.padding = "22px";
table.style.backgroundColor = "white";
table.style.color = "black";
table.style.margin = "-15px 500px";

table.addEventListener('click', (event) => {
  if (event.target.tagName === 'TD') {
    console.log(`You clicked on cell: ${event.target.textContent}`);
  }
});

const outer1 = document.getElementById('outer1');
outer1.addEventListener('click', function() {
  console.log('Outer Row clicked!');
});

const middle1 = document.getElementById('middle1');
middle1.addEventListener('click', function(event) {
  console.log('Middle Row clicked!');
  event.stopPropagation(); 
});

const inner1 = document.getElementById('inner1');
inner1.addEventListener('click', function() {
  console.log('Inner Cells clicked!');
});
