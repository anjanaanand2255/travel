// Alert on Home page button
function showAlert() {
  alert("Welcome to Travel Explorer! 🌍 Explore The World With Us !!");
}

// Contact Form Validation
function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ All fields are required!");
    return false;
  }

  alert("✅ Thank you for contacting us, " + name + "! we will contact u soon" );


  return true;
}
