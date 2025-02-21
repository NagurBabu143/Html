// const n = document.getElementById("name").value;
// console.log(`name :${n}`);
// const email = document.getElementById("email").value;
// console.log(`Email :${email}`);




const form = document.getElementById("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    const formdata = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
    };
    console.log("form submit:",formdata);
})


