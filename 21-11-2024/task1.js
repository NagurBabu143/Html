alert('Ordered and Unordered Lists')
document.body.style.backgroundColor = 'red';

const orderedList = document.querySelector('#orderedList');
orderedList.style.backgroundColor = 'lightpink';
orderedList.style.margin = '10px';
orderedList.style.padding = '20px';
orderedList.style.borderRadius = '12px';


const unorderedList = document.querySelector('#unorderedList');
unorderedList.style.backgroundColor = 'blue';
unorderedList.style.margin ='10px';
unorderedList.style.padding = '20px';
unorderedList.style.borderRadius = '12px';


const change=document.querySelector('h1');
change.textContent='After change Ol and Ul::';
change.style.textAlign = 'center';
change.style.color = 'white';


const orderedListItems = orderedList.querySelectorAll('li');
orderedListItems.forEach((a) => {
    a.style.padding = '10px';
    a.style.margin = '5px';
    a.style.border = '1px solid blue';
    a.style.borderRadius = '15px'
    a.style.backgroundColor = 'lightblue';
    a.style.textAlign = 'center';
    a.style.color = 'green'
    a.textContent = `Ordered Item`;
  });


const unorderedListItems = unorderedList.querySelectorAll('li');
unorderedListItems.forEach((b) =>{
    b.style.padding = '10px';
    b.style.margin = '5px';
    b.style.border = '1px solid red';
    b.style.borderRadius = '15px'
    b.style.backgroundColor = "yellow";
    b.style.textAlign = 'center';
    b.textContent = 'Unordered Item';
});

 const list=document.querySelectorAll('#A');
 list.forEach((B) => {
  B.style.backgroundColor = 'white';
 })





