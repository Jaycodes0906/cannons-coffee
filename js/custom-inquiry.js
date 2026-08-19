const form = document.getElementById("inquiryForm");
const message = document.querySelector(".inquiry-message");


function onFormSubmit(event) {

   event.preventDefault();

   const data = new FormData(event.target);

   const dataObject = Object.fromEntries(data.entries());

   console.log(dataObject);

   form.reset();


    let name = dataObject.name
    let email = dataObject.email
    let tel = dataObject.phone
    let comments = dataObject.comments
    let buyEmploy = dataObject.buyEmploy
    let flavor = dataObject.coffee
    
    console.log("Name:", name);
    console.log("Email:", email);
   console.log("phone", tel);
   console.log("comments", comments);
   console.log("buyEmploy", buyEmploy);
   console.log("flavor", flavor);
   

    message.textContent = `Thank you ${name}! We appreciate your interest in ${buyEmploy}. Your coffee flavor is ${flavor} and your comments are ${comments}. We will soon contact you at ${email} or ${tel}.`
    
}
form.addEventListener("submit", onFormSubmit);