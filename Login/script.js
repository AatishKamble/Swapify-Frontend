function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var usernameError = document.getElementById('username-error');
  var passwordError = document.getElementById('password-error');

  // Reset errors
  usernameError.textContent = '';
  passwordError.textContent = '';

  // Basic validation
  if (!username) {
    usernameError.textContent = 'Username is required';
    return;
  }

  if (!password) {
    passwordError.textContent = 'Password is required';
    return;
  }

  // Here you can add your login logic
  // For demonstration purposes, let's just log the values
  console.log('Username:', username);
  console.log('Password:', password);
}


function validateEmail() {
    var email = document.getElementById("username").value;
    var isValid = email.includes("@");
    if (isValid) {
        alert("Email is valid!");
    } else {
        alert("Please enter a valid email address!");
    }
}