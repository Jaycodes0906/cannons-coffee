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
    let tel = dataObject.phoneNumber
    let comments = dataObject.comments
    let coffee = dataObject.buy
    let hire = dataObject.employment
    let flavor = dataObject.flavor
    
    console.log("Name:", name);
    console.log("Email:", email);
   console.log("phone", phone);
   console.log("comments", comments);
   console.log("coffee", coffee);
   console.log("hire", employment)
   console.log("flavor", flavor);
   

    message.textContent = `Thank you ${name}! We appreciate your interest in ${coffee} or ${hire}. Your coffee flavor is ${flavor} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`
    
}
form.addEventListener("submit", onFormSubmit);