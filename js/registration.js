document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("name").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let errorBlock = document.getElementById("errorBlock");
    errorBlock.classList.add("hidden");
    errorBlock.innerHTML = "";

    let errors = [];
    if (!name || !mobile || !email || !password || !confirmPassword) {
        errors.push("All fields must be filled.");
    }
    if (mobile && !/^[0-9]{10}$/.test(mobile)) {
        errors.push("Mobile number must be exactly 10 digits.");
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
        errors.push("Enter a valid email address.");
    }
    if (password && password.length < 6) {
        errors.push("Password must be at least 6 characters.");
    }
    if (password && confirmPassword && password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        errorBlock.classList.remove("hidden");
        errorBlock.innerHTML = errors.join("<br>");
        return;
    }

    document.getElementById("successModal").classList.remove("hidden");
    document.getElementById("successModal").classList.add("flex");
});

function togglePassword() {
    let pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}
function closeModal() {
    document.getElementById("successModal").classList.add("hidden");
}