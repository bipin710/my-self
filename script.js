document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const responseDiv = document.getElementById('formResponse');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(el => el.textContent = '');

        // Validate form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let valid = true;

        if (name === '') {
            document.getElementById('nameError').textContent = 'Name is required.';
            valid = false;
        }
        if (email === '' || !validateEmail(email)) {
            document.getElementById('emailError').textContent = 'A valid email is required.';
            valid = false;
        }
        if (message === '') {
            document.getElementById('messageError').textContent = 'Message cannot be empty.';
            valid = false;
        }

        if (!valid) return;

        // Prepare data for AJAX request
        const formData = new FormData(form);

        // Send AJAX request
        fetch('your-php-script.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            responseDiv.textContent = data;
            responseDiv.className = data.includes('Thank you') ? 'success' : 'error';
        })
        .catch(error => {
            responseDiv.textContent = 'There was an error sending your message. Please try again later.';
            responseDiv.className = 'error';
        });
    });

    function validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
