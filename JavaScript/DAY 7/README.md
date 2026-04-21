# Form Builder with HTML and JavaScript

This project demonstrates a comprehensive form implementation using HTML and JavaScript with validation and dynamic features.

## Features

### HTML Form Elements
- Text inputs (first name, last name)
- Email input with validation
- Password fields with confirmation
- Number input for age with min/max constraints
- Select dropdown for country selection
- Radio buttons for gender selection
- Checkboxes for multiple interests selection
- Textarea for comments
- Terms and conditions checkbox

### JavaScript Functionality
- **Real-time validation**: Fields are validated as you type and when you leave them
- **Form submission handling**: Prevents default submission and processes data
- **Comprehensive validation**:
  - Required field validation
  - Email format validation
  - Password strength checking
  - Password confirmation matching
  - Age range validation (18-100)
  - Terms agreement validation
- **Error display**: Clear error messages for each field
- **Dynamic feedback**: Password strength indicator
- **Form reset**: Clears all data and errors
- **Result display**: Shows submitted data in a formatted way

## How to Use

1. Open `index.html` in a web browser
2. Fill out the form fields
3. The form will validate in real-time as you type
4. Password strength will be indicated as you type
5. Click "Submit" to submit the form (only if all validations pass)
6. View the submitted data below the form
7. Click "Reset" to clear the form

## Form Validation Rules

- **Names**: Required, minimum 2 characters
- **Email**: Required, must be valid email format
- **Password**: Required, minimum 6 characters, with strength indicator
- **Confirm Password**: Must match the password field
- **Age**: Required, must be between 18 and 100
- **Country**: Must select from dropdown
- **Gender**: Must select one option
- **Terms**: Must agree to terms and conditions

## Files

- `index.html`: Main HTML file with form structure and CSS styling
- `script.js`: JavaScript file containing all validation and form handling logic

## Browser Compatibility

This form works in all modern browsers that support HTML5 form validation and ES6 JavaScript features.