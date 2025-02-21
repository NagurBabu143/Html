document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        
        const formData = {
            name: name,
            email: email,
            message: message
        };
        localStorage.setItem('contactFormData', JSON.stringify(formData));

        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

