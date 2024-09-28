document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const cPassword = document.getElementById("c-password").value.trim();
        const date = document.getElementById("date").value;
        const male = document.getElementById("male").checked;
        const female = document.getElementById("female").checked;
        const tnc = document.getElementById("tnc").checked;

        let valid = true;
        let message = "";

        if (username === "" || email === "" || password === "" || cPassword === "" || date === "") {
            alert("All fields must be filled");
            valid = false;
        } else if (username.length <= 8) {
            alert("Username must be more than 8 characters!");
            valid = false;
        } else if (!email.endsWith("@gmail.com") && !email.endsWith("@outlook.com")) {
            alert("Email can only use @gmail.com or @outlook.com");
            valid = false;
        } else if (password.length <= 8) {
            alert("Password must be more than 8 characters");
            valid = false;
        } else if (!isAlphaNum(password)) {
            alert("Password must be alphanumeric");
            valid = false;
        } else if (password !== cPassword) {
            alert("Password and Confirm Password must match");
            valid = false;
        } else if (!date) {
            alert("Date is required");
            valid = false;
        } else if (!male && !female) {
            alert("Choose a gender");
            valid = false;
        } else if (!tnc) {
            alert("You must agree to terms and conditions");
            valid = false;
        }

        if (valid) {
            alert("Registration successful!");
            valid = true;
        }
    });

    function isAlphaNum(element) {
        let hasLetter = false;
        let hasNumber = false;

        for (let i = 0; i < element.length; i++) {
            if ((element[i] >= 'a' && element[i] <= 'z') || (element[i] >= 'A' && element[i] <= 'Z')) {
                hasLetter = true;
            } else if (element[i] >= '0' && element[i] <= '9') {
                hasNumber = true;
            }

            if (hasLetter && hasNumber) {
                return true;
            }
        }   

        return false;
    }
}   );