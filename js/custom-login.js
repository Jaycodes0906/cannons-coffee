const form = document.getElementById("login");
const message = document.querySelector("login-message")
   

function onFormSubmit(event) {

   event.preventDefault();

   const data = new FormData(event.target);

   const dataObject = Object.fromEntries(data.entries());

   console.log(dataObject);

   form.reset();


    let name = dataObject.name
    let email = dataObject.email
    let pass = dataObject.password
    
    console.log("Name:", name);
    console.log("Email:", email);
   console.log("password", pass);
     let message = dataObject.message
    message.textContent = `Welcome, ${name}! You are logged in!`
    console.log(message);
}

form.addEventListener("submit", onFormSubmit);