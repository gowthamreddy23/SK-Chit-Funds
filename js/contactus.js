document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

let name = document.getElementById("name").value.trim();
let mobile = document.getElementById("mobile").value.trim();
let message = document.getElementById("message").value.trim();

let errorBlock = document.getElementById("errorBlock");
errorBlock.classList.add("hidden");
errorBlock.innerHTML = "";

let errors = [];

if(!name || !mobile || !message){
errors.push("All fields must be filled.");
}

if(mobile && !/^[0-9]{10}$/.test(mobile)){
errors.push("Mobile number must be exactly 10 digits.");
}

if(errors.length > 0){
errorBlock.classList.remove("hidden");
errorBlock.innerHTML = errors.join("<br>");
return;
}

document.getElementById("successModal").classList.remove("hidden");
document.getElementById("successModal").classList.add("flex");

});

function closeModal(){
document.getElementById("successModal").classList.add("hidden");
}
