document.addEventListener("DOMContentLoaded", function () {
  let registerForm = document.getElementById("formRegister");
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");
  let confirmPasswordInput = document.getElementById("confirmPassword");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateForm()) {
      // register();
      let name = nameInput.value;
      let email = emailInput.value;
      let password = passwordInput.value;
      let avatar = ""
      const data = {
        name: name,
        email: email,
        password: password,
        avatar: avatar
      }
      

      // Kirim data ke API menggunakan metode fetch
      fetch('https://6523581ef43b179384155688.mockapi.io/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(data => {
          alert("Pendaftaran berhasil!");
          window.location.href = "login.html"
        })
        .catch(error => {
          console.error('Terjadi kesalahan:', error);
        });
    }
  });

  function validateForm() {
    let name = nameInput.value;
    let email = emailInput.value;
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

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
