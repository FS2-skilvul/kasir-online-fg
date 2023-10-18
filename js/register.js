document.addEventListener("DOMContentLoaded", function () {
  var registerForm = document.getElementById("formRegister");
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirmPassword");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      register();
    }
  });

  function validateForm() {
    var name = nameInput.value;
    var email = emailInput.value;
    var password = passwordInput.value;
    var confirmPassword = confirmPasswordInput.value;

    if (
      name === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      alert("Semua kolom harus diisi.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok.");
      return false;
    }

    return true;
  }

  function register() {
    alert("Aksi pendaftaran berhasil! (Contoh sederhana)");
  }
});
