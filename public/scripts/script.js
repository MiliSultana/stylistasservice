// public/scripts/script.js

// Attach validation function to window so React can call it
window.validateRegistration = function(formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const phone = form.querySelector('input[name="phone"]').value.trim();
  const gender = form.querySelector('select[name="gender"]').value;
  const password = form.querySelector('input[name="password"]').value;

  let valid = true;
  let errors = [];

  // Name validation: only letters, min 2 chars
  if (!name) {
    valid = false;
    errors.push("Name is required");
  } else if (!/^[A-Za-z\s]{2,}$/.test(name)) {
    valid = false;
    errors.push("Name must be at least 2 letters and contain only letters");
  }

  // Email validation: stricter regex
  if (!email) {
    valid = false;
    errors.push("Email is required");
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(email)) {
    valid = false;
    errors.push("Invalid email address");
  }

  // Phone validation: numeric, 10–15 digits
  if (!phone) {
    valid = false;
    errors.push("Phone is required");
  } else if (!/^\d{10,15}$/.test(phone)) {
    valid = false;
    errors.push("Phone number must be 10-15 digits");
  }

  // Gender validation
  if (!gender) {
    valid = false;
    errors.push("Gender is required");
  }

  // Password validation: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
  if (!password) {
    valid = false;
    errors.push("Password is required");
  } else if (!/(?=.*[a-z])/.test(password)) {
    valid = false;
    errors.push("Password must contain at least one lowercase letter");
  } else if (!/(?=.*[A-Z])/.test(password)) {
    valid = false;
    errors.push("Password must contain at least one uppercase letter");
  } else if (!/(?=.*\d)/.test(password)) {
    valid = false;
    errors.push("Password must contain at least one number");
  } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
    valid = false;
    errors.push("Password must contain at least one special character (!@#$%^&*)");
  } else if (password.length < 8) {
    valid = false;
    errors.push("Password must be at least 8 characters long");
  }

  if (!valid) {
    alert(errors.join("\n"));
  }

  return valid;
};
