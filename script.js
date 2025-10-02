document.addEventListener('DOMContentLoaded', function () {
    // Checks for Form Selection implementation
    const form = document.getElementById('registration-form');
    
    // Checks for Feedback Div Selection
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Checks for Retrieve User Inputs implementation
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        let isValid = true;
        // Checks for error messages implementation
        const messages = [];

        // Checks for the validation of the username input
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // Checks for the validation of the email input
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }
        
        // Checks for the validation of the password input
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // Checks for Feedback Display Logic
        feedbackDiv.style.display = "block"; // Make feedbackDiv visible

        if (isValid) {
            // Success case
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.backgroundColor = '#d4edda'; // Bonus: sfondo verde per coerenza
        } else {
            // Error case
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545";
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Bonus: sfondo rosso per coerenza
        }
    });
});
