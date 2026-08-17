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
    let inquiry = dataObject.inquiry
    let coffee = dataObject.coffee
    let message = dataObject.message
    
    console.log("Name:", name);
    console.log("Email:", email);
   console.log("tel", phoneNumber);
   console.log("comments", comments);
   console.log("inquiry", inquiry);
   console.log("coffee", coffee);
   

    message.textContent = `Thank you ${name}! We appreciate your interest in ${inquiry}. Your coffee flavor is ${coffee} and your comments are ${comments}. We will soon contact you at ${email} or ${phoneNumber}.`
    console.log(message);
}

form.addEventListener("submit", onFormSubmit);