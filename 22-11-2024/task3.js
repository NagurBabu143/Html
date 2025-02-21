alert('animal');
document.body.style.backgroundColor = 'red';

const animals = ["Lion", "Elephant", "Tiger", "Zebra", "Kangaroo","Giraffe", "Panda", "Koala", "Bear", "Monkey"];

const animalList = document.getElementById('animal-list');

animals.forEach(animal => {
  const listItem = document.createElement('li');
  listItem.textContent = animal;
  listItem.style.color = 'white';
  listItem.style.padding = '10px';
  listItem.style.margin = '5px';
  listItem.style.border = '1px solid black';
  listItem.style.borderRadius = '5px';
  listItem.style.backgroundColor = 'blue';
  //listItem.style.textAlign = 'center';
  listItem.setAttribute('style',`text-align: center;`)
  animalList.appendChild(listItem);
});
