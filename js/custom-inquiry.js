const form = document.getElementById("inquiryForm");

function onFormSubmit(event) {

   event.preventDefault();

   const data = new FormData(event.target);

   const dataObject = Object.fromEntries(data.entries());

   console.log(dataObject);

   form.reset();


    let name = dataObject.name
    let email = dataObject.email
    let tel = dataObject.phoneNumber
    let comments = dataObject.comments
    let inquiry = dataObject.buy-coffee
    let inquiry = dataObject.employment
    let coffee = dataObject.coffee
    
    console.log("Name:", name);
    console.log("Email:", email);
   console.log("phone", phone);
   console.log("comments", comments);
   console.log("inquiry", buy-coffee);
   console.log("inquiry", employment)
   console.log("coffee", coffee);
   
    let message = dataObject.message;
    message.textContent = `Thank you ${name}! We appreciate your interest in ${inquiry}. Your coffee flavor is ${coffee} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`
    console.log(message);
}

form.addEventListener("submit", onFormSubmit);