document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('visaApplicationForm');
    const notification = document.getElementById('notification');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            // Here you would typically send the form data to your server
            console.log('Form submitted:', getFormData());
            showNotification('Application submitted successfully!', 'success');
            form.reset();
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                showError(field, 'This field is required');
            } else {
                clearError(field);
            }
        });

        const email = document.getElementById('email');
        if (email.value && !isValidEmail(email.value)) {
            isValid = false;
            showError(email, 'Please enter a valid email address');
        }

        return isValid;
    }

    function showError(field, message) {
        clearError(field);
        const error = document.createElement('div');
        error.className = 'error';
        error.innerText = message;
        field.parentNode.appendChild(error);
        field.classList.add('error-input');
    }

    function clearError(field) {
        const error = field.parentNode.querySelector('.error');
        if (error) {
            error.remove();
        }
        field.classList.remove('error-input');
    }

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function getFormData() {
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        return data;
    }

    function showNotification(message, type) {
        notification.textContent = message;
        notification.className = type;
        notification.style.opacity = 1;
        setTimeout(() => {
            notification.style.opacity = 0;
        }, 3000);
    }
});