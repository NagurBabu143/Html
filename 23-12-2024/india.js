const images = document.querySelectorAll(".banner-images img");
let currentIndex = 0;

function showNextImage() {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("active");
}

setInterval(showNextImage, 3000);


function FAQ(faqItem) {
  const answer = faqItem.nextElementSibling;
  answer.style.display = answer.style.display === "block" ? "none" : "block";
}


function submitLogin(event) {
  event.preventDefault();
  const email = document.querySelector('.login-container input[type="email"]').value;
  const password = document.querySelector('.login-container input[type="password"]').value;
  console.log("Email:", email);
  console.log("Password:", password);
  alert("Login successful for " + email + "!");
  document.querySelector(".login-container form").reset();
}

function submitForm(event) {
  event.preventDefault();
  const name = document.querySelector('.contact-form input[type="text"]').value;
  const email = document.querySelector( '.contact-form input[type="email"]').value;
  const message = document.querySelector(".contact-form textarea").value;
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  alert(
    "Thank you for your message, " + name + "! We will get back to you soon."
  );
  document.querySelector(".contact-form").reset();
}

function submitSignup(event) {
  event.preventDefault();
  const fullName = document.querySelector('.signup-container input[type="text"]').value;
  const email = document.querySelector('.signup-container input[type="email"]').value;
  const password = document.querySelector('.signup-container input[type="password"]' ).value;
  console.log("Full Name:", fullName);
  console.log("Email:", email);
  console.log("Password:", password);
  alert("Signup successful for " + fullName + "!");
  document.querySelector(".signup-container form").reset();
}
