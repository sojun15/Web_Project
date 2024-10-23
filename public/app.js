
const wrapper = document.querySelector('.wrapper')
const registerLink = document.querySelector('.register-link')
const loginLink = document.querySelector('.login-link')

registerLink.onclick = () => {
    wrapper.classList.add('active')
}

loginLink.onclick = () => {
    wrapper.classList.remove('active')
}
// Array of dynamic background images










document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  // Handle login submission
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();  // Prevent page reload

    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    if (username === 'ibu' && password === '123') {
      alert('Welcome, Admin!');
      window.location.href = 'admin_dashboard.html'; // Redirect to admin dashboard
      return;
  }

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);  // Success message
        alert(`Welcome, ${username}!`);

        if (data.role === "student") {
          window.location.href = "student_dashboard.html";
        } else if (data.role === "tutor") {
          window.location.href = "tutor_dashboard.html";
        }
      } else {
        alert(data.message);  // Display error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed. Check console for more details.");
    }
  });

  // Handle registration submission
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("signup_password").value;
    const role = document.getElementById("role").value;

    try {
      const response = await fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);  // Registration success
        window.location.href = "login.html";  // Redirect to login
      } else {
        alert(data.message);  // Registration error
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Check console for more details.");
    }
  });
});
