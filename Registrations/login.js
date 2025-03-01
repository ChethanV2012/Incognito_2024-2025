// script.js

function navigateTo() {
    window.location.href = '../index.html';
}

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get Form Values
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();

    let isValid = true;

    // Validation
    if (!email) {
        alert("Email Id is required.");
        isValid = false;
    }
    if (!password) {
        alert("Password is required.");
        isValid = false;
    }

    if (!isValid) return;

    // Example validation for credentials
    if (email === "admin@example.com" && password === "password123") {
        alert("Login successful!");
        window.location.href = "/Registrations/adminpage.html"; // Redirect to the dashboard page
    } else {
        alert("Invalid Email Id or Password.");
    }
});
