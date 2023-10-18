document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("formLogin");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      login();
    }
  });

  function validateForm() {
    var email = emailInput.value;
    var password = passwordInput.value;

    if (email === "" || password === "") {
      alert("Alamat email dan password harus diisi.");
      return false;
    }

    return true;
  }

  function login() {
    alert("Aksi masuk berhasil! (Contoh sederhana)");
  }
});
