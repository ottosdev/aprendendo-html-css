function submit() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username && password) {
    alert(`Your Username: ${username} and Password: ${password}`);
    return;
  }
  alert("Enter your crendecials, please.");
}
