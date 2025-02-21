console.log('added');

let submitBtn = document.querySelector('.submit'); 
let resetBtn = document.querySelector('.reset'); 


resetBtn.addEventListener('click', function(){
  
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let query = document.getElementById('textQuery');

    firstName.value = '';
    lastName.value = '';
    email.value = '';
    query.value = '';

   
    localStorage.clear();
});


submitBtn.addEventListener('click', function(){
   
    let firstName = document.getElementById('firstName');
    let lastName = document.getElementById('lastName');
    let email = document.getElementById('email');
    let query = document.getElementById('textQuery');


    localStorage.setItem('First Name', firstName.value);
    localStorage.setItem('Last Name', lastName.value);
    localStorage.setItem('Email Address', email.value);
    localStorage.setItem('Query', query.value);

    
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    query.value = '';
});
