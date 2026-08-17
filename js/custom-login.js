const form = document.getElementById("login");

   

function onFormSubmit(event) {

   event.preventDefault();

   const data = new FormData(event.target);

   const dataObject = Object.fromEntries(data.entries());

   console.log(dataObject);

   form.reset();


    let name = dataObject.name
    let email = dataObject.email
    let pass = dataObject.password
    let message = dataObject.message
    
    console.log("Name:", name);
    console.log("Email:", email);
   console.log("password", pass);


    message.textContent = `Welcome, ${name}! You are logged in!`
    console.log(message);
}

form.addEventListener("submit", onFormSubmit);