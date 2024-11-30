// Handle form submission
document.getElementById("signInForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        alert(`Welcome, ${username}!`);
    } else {
        alert("Please fill in both fields.");
    }
});

// Handle Forgot Password click
document.getElementById("forgotPassword").addEventListener("click", function () {
    alert("Redirecting to Forgot Password page...");
});

// Handle Signup click
document.getElementById("signUp").addEventListener("click", function () {
    alert("Redirecting to Signup page...");
});