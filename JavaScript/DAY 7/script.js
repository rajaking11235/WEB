// Form validation and handling script

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const resultDiv = document.getElementById('result');

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearError);
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    // Form reset
    form.addEventListener('reset', function() {
        clearAllErrors();
        resultDiv.innerHTML = '';
    });
});

function validateField(e) {
    const field = e.target;
    const fieldName = field.name;
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    switch(fieldName) {
        case 'firstName':
        case 'lastName':
            if (!value) {
                errorMessage = `${fieldName === 'firstName' ? 'First' : 'Last'} name is required`;
                isValid = false;
            } else if (value.length < 2) {
                errorMessage = `${fieldName === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`;
                isValid = false;
            }
            break;

        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value) {
                errorMessage = 'Email is required';
                isValid = false;
            } else if (!emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
            break;

        case 'password':
            if (!value) {
                errorMessage = 'Password is required';
                isValid = false;
            } else if (value.length < 6) {
                errorMessage = 'Password must be at least 6 characters';
                isValid = false;
            }
            break;

        case 'confirmPassword':
            const password = document.getElementById('password').value;
            if (!value) {
                errorMessage = 'Please confirm your password';
                isValid = false;
            } else if (value !== password) {
                errorMessage = 'Passwords do not match';
                isValid = false;
            }
            break;

        case 'age':
            const age = parseInt(value);
            if (!value) {
                errorMessage = 'Age is required';
                isValid = false;
            } else if (isNaN(age) || age < 18 || age > 100) {
                errorMessage = 'Age must be between 18 and 100';
                isValid = false;
            }
            break;

        case 'country':
            if (!value) {
                errorMessage = 'Please select a country';
                isValid = false;
            }
            break;

        case 'terms':
            if (!field.checked) {
                errorMessage = 'You must agree to the terms and conditions';
                isValid = false;
            }
            break;
    }

    const errorElement = document.getElementById(`${fieldName}Error`);
    if (errorElement) {
        if (!isValid) {
            errorElement.textContent = errorMessage;
            field.style.borderColor = 'red';
        } else {
            errorElement.textContent = '';
            field.style.borderColor = '#ddd';
        }
    }

    return isValid;
}

function clearError(e) {
    const field = e.target;
    const fieldName = field.name;
    const errorElement = document.getElementById(`${fieldName}Error`);

    if (errorElement && errorElement.textContent) {
        // Only clear error if user is typing and field becomes valid
        if (field.type === 'checkbox') {
            if (field.checked) {
                errorElement.textContent = '';
                field.style.borderColor = '#ddd';
            }
        } else if (field.value.trim()) {
            errorElement.textContent = '';
            field.style.borderColor = '#ddd';
        }
    }
}

function validateForm() {
    let isValid = true;
    const requiredFields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword', 'age', 'country'];

    // Validate required fields
    requiredFields.forEach(fieldName => {
        const field = document.getElementById(fieldName);
        if (!validateField({target: field})) {
            isValid = false;
        }
    });

    // Validate radio buttons (gender)
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const genderSelected = Array.from(genderRadios).some(radio => radio.checked);
    const genderError = document.getElementById('genderError');
    if (!genderSelected) {
        genderError.textContent = 'Please select your gender';
        isValid = false;
    } else {
        genderError.textContent = '';
    }

    // Validate terms checkbox
    const termsCheckbox = document.getElementById('terms');
    if (!termsCheckbox.checked) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions';
        isValid = false;
    } else {
        document.getElementById('termsError').textContent = '';
    }

    return isValid;
}

function clearAllErrors() {
    const errorElements = document.querySelectorAll('.error');
    errorElements.forEach(element => {
        element.textContent = '';
    });

    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.style.borderColor = '#ddd';
    });
}

function submitForm() {
    const formData = new FormData(document.getElementById('registrationForm'));
    const data = {};

    // Process form data
    for (let [key, value] of formData.entries()) {
        if (key === 'interests') {
            if (!data.interests) data.interests = [];
            data.interests.push(value);
        } else {
            data[key] = value;
        }
    }

    // Display submitted data
    displayResult(data);
}

function displayResult(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Form Submitted Successfully!</h3>
        <p><strong>Full Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Country:</strong> ${data.country.charAt(0).toUpperCase() + data.country.slice(1)}</p>
        <p><strong>Gender:</strong> ${data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}</p>
        <p><strong>Interests:</strong> ${data.interests ? data.interests.join(', ') : 'None selected'}</p>
        <p><strong>Comments:</strong> ${data.comments || 'No comments'}</p>
        <p><strong>Terms Agreed:</strong> ${data.terms ? 'Yes' : 'No'}</p>
    `;

    // Scroll to result
    resultDiv.scrollIntoView({ behavior: 'smooth' });
}

// Additional utility functions
function resetForm() {
    document.getElementById('registrationForm').reset();
    clearAllErrors();
    document.getElementById('result').innerHTML = '';
}

// Dynamic form enhancements
function addDynamicValidation() {
    // Password strength indicator
    const passwordInput = document.getElementById('password');
    const strengthIndicator = document.createElement('div');
    strengthIndicator.id = 'passwordStrength';
    strengthIndicator.style.marginTop = '5px';
    strengthIndicator.style.fontSize = '12px';
    passwordInput.parentNode.appendChild(strengthIndicator);

    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;
        let feedback = [];

        if (password.length >= 6) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^A-Za-z0-9]/.test(password)) strength++;

        switch(strength) {
            case 0:
            case 1:
                strengthIndicator.textContent = 'Weak password';
                strengthIndicator.style.color = 'red';
                break;
            case 2:
            case 3:
                strengthIndicator.textContent = 'Medium password';
                strengthIndicator.style.color = 'orange';
                break;
            case 4:
            case 5:
                strengthIndicator.textContent = 'Strong password';
                strengthIndicator.style.color = 'green';
                break;
        }
    });
}

// Initialize dynamic features when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    addDynamicValidation();
});