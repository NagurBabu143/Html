const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert(`Thank you for contacting us, ${name}! We will get back to you shortly.`);
    
    
    contactForm.reset();
});


const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        alert(`Login successful for ${email}!`);
       
    } else {
        alert('Please fill in all fields.');
    }
});

function handleSignUp(event) {
    event.preventDefault(); 
   
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    
    console.log('Sign Up:', { username, email, password });

    
    document.getElementById('signup-form').reset();
    alert('Sign Up Successful! Now you can login...!');
}


function RegisterForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
     
        form.style.display = (form.style.display === "none" || form.style.display === "") ? "block" : "none";

        
        alert(`The form is now ${form.style.display === "block" ? "visible" : "hidden"}.`);
    } else {
        alert("Form not found! Please check the form ID.");
    }
}
