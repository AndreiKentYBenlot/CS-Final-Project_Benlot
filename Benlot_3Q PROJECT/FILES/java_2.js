//signup page, gets the data from the form and saves to localStorage
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        const firstNameInput = document.getElementById('firstName');
        const lastNameInput = document.getElementById('lastName');
        const sexInput = document.querySelector('input[name="sex"]:checked');
        const emailInput = document.getElementById('emailAdd');
        const passwordInput = document.getElementById('pass');
        const contactInput = document.getElementById('contact');
        const reasonInput = document.getElementById('reason');

        if (
            firstNameInput && lastNameInput && emailInput &&
            passwordInput && contactInput && reasonInput
        ) {
            const userData = {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                sex: sexInput ? sexInput.value : "",
                email: emailInput.value,
                password: passwordInput.value,
                contact: contactInput.value,
                reason: reasonInput.value
            };

            // Save to localStorage
            localStorage.setItem('signupData', JSON.stringify(userData));

            alert('Thank you for signing up!');
            window.location.href = "../FILES/profile.html";
        } else {
            alert('Please fill out all required fields.');
        }
    });
}


//profile page
window.addEventListener('DOMContentLoaded', function() {
    const profileDiv = document.getElementById('profile-info');
    if (profileDiv) {
            const userData = JSON.parse(localStorage.getItem('signupData'));
            if (userData) {
                profileDiv.innerHTML = `
                    <h2>Profile Information</h2>
                    <div class="profile-card">
                    <div id="pfp">
                    <img src="../IMAGES/pfp.jpg" alt="waste management" height="300" width=auto>
                    </div>
                    <p><strong>Name:</strong> ${userData.firstName} ${userData.lastName}</p>
                    <p><strong>Sex:</strong> ${userData.sex}</p>
                    <p><strong>Email:</strong> ${userData.email}</p>
                    <p><strong>Reason:</strong> ${userData.reason}</p>
                    </div>
                `;//string for displaying data
            } else {
                profileDiv.innerHTML = "<p>No profile data found. Please sign up first.</p>";
            }
    }
});
