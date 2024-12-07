let message= "Welcome to Portfolio Star!";
console.log(message);

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    
    const allowedUsername = "robertvella";
    const allowedPassword = "securePassword123";
  
    if (username === allowedUsername && password === allowedPassword) {
      alert("Login successful! Welcome to the portfolio website.");
      window.location.href = "page2.html"; 
    } else {
      document.getElementById('error-message').innerText = "Invalid credentials. Please try again.";
    }
  });
  