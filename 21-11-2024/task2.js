alert('welcome to myTable')
document.body.style.backgroundColor='red';

const change=document.querySelector('h1');
change.textContent='After change table::';
change.style.textAlign = 'center';
change.style.color = 'white';

const table = document.getElementById('myTable');
table.style.borderCollapse = 'collapse';
table.style.width = '100%';
table.style.margin = '20px 0';


const headers = table.querySelectorAll('th');
headers.forEach((header) => {
  header.style.backgroundColor = 'orange'; 
  header.style.color = 'black'; 
  header.style.padding = '10px'; 
  header.style.border = '2px solid black'; 
  header.style.textAlign = 'center';
  //header.textContent = "header";
});

const data = table.querySelectorAll('td');
data.forEach((data1) => {
    data1.style.backgroundColor = 'white';
    data1.style.color = 'blue';
    data1.style.padding = '5px';
    data1.style.border = '2px solid black';
    data1.style.textAlign = 'center';
    //data1.textContent = 'data';
   
});

const data5 = document.querySelectorAll('#data3');
data5.forEach((data6) => {
  data6.style.backgroundColor = 'red';
  data6.style.color = 'white';
  //data6.textContent = 'updating';
  
})



const headerRow = document.getElementsByClassName('header-row');

console.log(headerRow)

// const rows = table.getElementsByTagName('th');
// rows.style.textAlign = 'center';
// console.log(rows);


// const rows1 = table.getElementsByTagName('td');
// rows1.style.textAlign = 'center';
// console.log(rows1);

// const firstRow = table.querySelector('tr');
// firstRow.style.color = 'darkblue';


