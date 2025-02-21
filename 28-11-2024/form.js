const form = document.getElementById('userForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const out = document.getElementById('outputDiv');
  out.innerHTML = `Email: ${email}<br>Password: ${password}`;
  console.log(out);
});
