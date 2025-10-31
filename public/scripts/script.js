// public/scripts/script.js

// Helper: show inline error message below input
function showError(input, message) {
  // Remove existing error
  let existingError = input.parentElement.querySelector(".error-text");
  if (existingError) existingError.remove();

  // Create and append new error message
  if (message) {
    const error = document.createElement("p");
    error.className = "error-text text-red-500 text-xs mt-1";
    error.textContent = message;
    input.parentElement.appendChild(error);
    input.classList.add("border-red-500");
  } else {
    input.classList.remove("border-red-500");
  }
}

// Registration Validation Function
window.validateRegistration = function (formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const phone = form.querySelector('input[name="phone"]');
  const gender = form.querySelector('select[name="gender"]');
  const password = form.querySelector('input[name="password"]');
  const confirmPassword = form.querySelector('input[name="confirmPassword"]');

  let valid = true;

  // Clear all previous errors
  form.querySelectorAll(".error-text").forEach((e) => e.remove());
  form.querySelectorAll("input, select").forEach((el) => el.classList.remove("border-red-500"));

  // Name validation
  if (!name.value.trim()) {
    showError(name, "Name is required");
    valid = false;
  } else if (!/^[A-Za-z\s]{2,}$/.test(name.value.trim())) {
    showError(name, "Name must contain only letters and be at least 2 characters");
    valid = false;
  } else {
    showError(name, "");
  }

  // Email validation
  if (!email.value.trim()) {
    showError(email, "Email is required");
    valid = false;
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(email.value.trim())) {
    showError(email, "Invalid email address");
    valid = false;
  } else {
    showError(email, "");
  }

  // Phone validation
  if (!phone.value.trim()) {
    showError(phone, "Phone number is required");
    valid = false;
  } else if (!/^\d{10}$/.test(phone.value.trim())) {
    showError(phone, "Phone number must be 10 digits");
    valid = false;
  } else {
    showError(phone, "");
  }

  // Gender validation
  if (!gender.value) {
    showError(gender, "Gender is required");
    valid = false;
  } else {
    showError(gender, "");
  }

  // Password validation
  if (!password.value) {
    showError(password, "Password is required");
    valid = false;
  } else if (password.value.length < 8) {
    showError(password, "Password must be at least 8 characters long");
    valid = false;
  } else if (!/(?=.*[A-Z])/.test(password.value)) {
    showError(password, "Must include at least one uppercase letter");
    valid = false;
  } else if (!/(?=.*\d)/.test(password.value)) {
    showError(password, "Must include at least one number");
    valid = false;
  } else if (!/(?=.*[!@#$%^&*])/.test(password.value)) {
    showError(password, "Must include at least one special character (!@#$%^&*)");
    valid = false;
  } else {
    showError(password, "");
  }

  // Confirm Password validation
  if (!confirmPassword.value) {
    showError(confirmPassword, "Please confirm your password");
    valid = false;
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
    valid = false;
  } else {
    showError(confirmPassword, "");
  }

  // If not valid, stop here
  if (!valid) return false;

  // If registration is valid, store user credentials
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: name.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      gender: gender.value,
      password: password.value,
    })
  );

  return true;
};


// LOGIN VALIDATION FUNCTION 
window.validateLogin = function (formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  // Clear old errors
  const oldErrors = form.querySelectorAll(".error-message");
  oldErrors.forEach((el) => el.remove());

  const emailField = form.querySelector('input[name="email"]');
  const passwordField = form.querySelector('input[name="password"]');
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  let valid = true;

  // Email validation
  if (!email) {
    showFieldError(emailField, "Email is required");
    valid = false;
  }

  // Password validation
  if (!password) {
    showFieldError(passwordField, "Password is required");
    valid = false;
  }

  if (!valid) return false;

  // Retrieve stored user credentials
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    showFormError(form, "No user found. Please register first.");
    return false;
  }

  // Validate credentials
  if (storedUser.email === email && storedUser.password === password) {
    //  Successful login
    return true;
  } else {
    showFormError(form, "Invalid email or password");
    return false;
  }
};

// Helper function to show field-specific errors
function showFieldError(inputElement, message) {
  const error = document.createElement("p");
  error.className = "error-message text-red-500 text-sm mt-1";
  error.textContent = message;
  inputElement.parentElement.appendChild(error);
}

// Helper function to show form-level errors (for invalid login)
function showFormError(form, message) {
  const error = document.createElement("p");
  error.className = "error-message text-red-500 text-sm mt-3 text-center";
  error.textContent = message;
  form.appendChild(error);
}
