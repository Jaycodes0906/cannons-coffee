const form = document.getElementById("inquiryForm");

form.addEventListener("submit", submit)
    function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    
    console.log("Name:", name);
    console.log("Email:", email);
   console.log("password", pass);

    message.textContent = `Welcome, ${name}! You are logged in!`
    console.log(message);
}

form.addEventListener("submit", onFormSubmit);