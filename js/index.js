document.addEventListener("DOMContentLoaded", function () {
  // var loginForm = document.getElementById("formLogin");
  let emailInput = document.getElementById("email");
  let passwordInput = document.getElementById("password");

  document.getElementById("formLogin").addEventListener("submit", async function (event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (validateForm()) {
      // login();
      const apiURL = await fetch("https://6523581ef43b179384155688.mockapi.io/api/v1/users")
      const data = await apiURL.json()
      // console.log(data)
      // const formData = new FormData(event.target);
      // const email = formData.get("email");
      // const password = formData.get("password");
      console.log(email, password)
      let userFound = null;

      data.forEach(user => {
        if (user.email === email && user.password === password) {
          userFound = user;
          console.log(`${user.email + user.password}`)
        }
      });

      if (userFound) {
        alert(`Welcome, ${userFound.name}!`);
        sessionStorage.setItem('id', `${userFound.id}`)
        sessionStorage.setItem('name', `${userFound.name}`)
        sessionStorage.setItem('avatar', `${userFound.avatar}`)
        window.location.href = "gudang.html"
      } else {
        alert("Invalid email or password.");
      }

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

});
