if(localStorage.getItem("isLoggedIn") !== "true"){
window.location.href = "../login.html";
}

function logout(){

localStorage.removeItem("isLoggedIn");
localStorage.removeItem("username");
window.location.href = "../login.html";
}

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
if(menuBtn){
menuBtn.addEventListener("click", () => {
sidebar.classList.toggle("-translate-x-full");
});
}