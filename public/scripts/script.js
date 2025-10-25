// public/scripts/script.js

// ✅ Registration Validation Function
window.validateRegistration = function (formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const name = form.querySelector('input[name="name"]').value.trim();
  const email = form.querySelector('input[name="email"]').value.trim();
  const phone = form.querySelector('input[name="phone"]').value.trim();
  const gender = form.querySelector('select[name="gender"]').value;
  const password = form.querySelector('input[name="password"]').value;
  const confirmPassword = form.querySelector('input[name="confirmPassword"]').value;

  let valid = true;
  let errors = [];

  // ✅ Name validation
  if (!name) {
    valid = false;
    errors.push("Name is required");
  } else if (!/^[A-Za-z\s]{2,}$/.test(name)) {
    valid = false;
    errors.push("Name must contain only letters and be at least 2 characters");
  }

  // ✅ Email validation
  if (!email) {
    valid = false;
    errors.push("Email is required");
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/.test(email)) {
    valid = false;
    errors.push("Invalid email address");
  }

  // ✅ Phone validation
  if (!phone) {
    valid = false;
    errors.push("Phone is required");
  } else if (!/^\d{10,15}$/.test(phone)) {
    valid = false;
    errors.push("Phone number must be 10–15 digits");
  }

  // ✅ Gender validation
  if (!gender) {
    valid = false;
    errors.push("Gender is required");
  }

  // ✅ Password validation
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

  // ✅ Confirm Password validation
  if (!confirmPassword) {
    valid = false;
    errors.push("Please confirm your password");
  } else if (password !== confirmPassword) {
    valid = false;
    errors.push("Passwords do not match");
  }

  if (!valid) {
    alert(errors.join("\n"));
    return false;
  }

  // ✅ If registration is valid, store user credentials in localStorage
  localStorage.setItem(
    "user",
    JSON.stringify({
      name,
      email,
      phone,
      gender,
      password,
    })
  );

  alert("✅ Registration successful!");
  return true;
};

// ✅ Login Validation Function
window.validateLogin = function (formId) {
  const form = document.getElementById(formId);
  if (!form) return false;

  const email = form.querySelector('input[name="email"]').value.trim();
  const password = form.querySelector('input[name="password"]').value.trim();

  let errors = [];

  if (!email) errors.push("Email is required");
  if (!password) errors.push("Password is required");

  if (errors.length > 0) {
    alert(errors.join("\n"));
    return false;
  }

  // ✅ Retrieve stored user credentials
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("No user found. Please register first.");
    return false;
  }

  // ✅ Validate credentials
  if (storedUser.email === email && storedUser.password === password) {
    alert("🎉 Login successful!");
    return true;
  } else {
    alert("❌ Invalid email or password");
    return false;
  }
};
