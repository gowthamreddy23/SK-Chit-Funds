// protect page
if(localStorage.getItem("isLoggedIn") !== "true"){
window.location.href="../login.html";
}

// demo profile data
let profile = JSON.parse(localStorage.getItem("profile")) || {
customerId:"SKCF1023",
name:"Gowtham Reddy",
mobile:"9876543210",
email:"gowtham@gmail.com",
address:"Hyderabad"
};

// load data
document.getElementById("customerId").value = profile.customerId;
document.getElementById("name").value = profile.name;
document.getElementById("mobile").value = profile.mobile;
document.getElementById("email").value = profile.email;
document.getElementById("address").value = profile.address;


// update profile
document.getElementById("profileForm").addEventListener("submit",function(e){

e.preventDefault();

let updatedProfile = {
customerId: profile.customerId,
name: document.getElementById("name").value,
mobile: document.getElementById("mobile").value,
email: document.getElementById("email").value,
address: document.getElementById("address").value
};

localStorage.setItem("profile", JSON.stringify(updatedProfile));

alert("Profile Updated Successfully");

});


// logout
function logout(){

localStorage.removeItem("isLoggedIn");
localStorage.removeItem("username");

window.location.href="../login.html";

}