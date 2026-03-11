document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    let errorBlock = document.getElementById("errorBlock");
    errorBlock.classList.add("hidden");
    errorBlock.innerHTML = "";

    let errors = [];
    if (!username || !password) {
        errors.push("All fields must be filled.");
    }
    // Demo login check. Example: username = admin , password = 123456
    if (username && password) {
        if (username !== "admin" || password !== "123456") {
            errors.push("Invalid username or password.");
        }
    }
    if (errors.length > 0) {
        errorBlock.classList.remove("hidden");
        errorBlock.innerHTML = errors.join("<br>");
        return;
    }
    window.location.href = "Customer_Dashboard/dashboard.html";
});
function togglePassword() {
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}