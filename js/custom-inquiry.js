const form = document.getElementById("inquiryForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById(name).value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const comments = document.getElementById("comments").value;
    const coffee = document.getElementById("coffee")

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("phone:", phone);
    console.log("inquiry:", inquiryChoice);
    console.log("comments:", comments);
    console.log("coffee", coffee);


    message.textContent = `Thank you ${name}! We appreciate your interest in ${inquiry}. Your favorite coffee flavor is ${coffee} and your ${comments}. We will soon contact you at ${email} or ${phone}.`
    console.log(message);
}