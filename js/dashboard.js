if(localStorage.getItem("isLoggedIn") !== "true"){
window.location.href = "../login.html";
}
function logout(){

localStorage.removeItem("isLoggedIn");
localStorage.removeItem("username");

window.location.href="../login.html";

}