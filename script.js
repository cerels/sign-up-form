document.addEventListener("DOMContentLoaded", function() {
    var createAccountBtn = document.getElementById('createAccountBtn');
    createAccountBtn.addEventListener('click', function() {
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        }
    });
});
