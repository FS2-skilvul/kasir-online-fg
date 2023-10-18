function openModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "flex";
}

function closeModal() {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function confirmAction(confirmation) {
  closeModal();
  if (confirmation) {
    // Tindakan yang diambil jika pengguna memilih "Iya"
    window.location.href = '/gudang.html'
  } else {
    // Tindakan yang diambil jika pengguna memilih "Tidak"
    closeModal();
  }
}

// Menutup modal jika pengguna mengklik di luar modal
window.onclick = function (event) {
  let modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Mencegah pengiriman default formulir

  // Mengambil data dari formulir
  const formData = new FormData(this);

  // Konversi FormData ke objek JSON
  const formDataJSON = {};
  formData.forEach((value, key) => {
      formDataJSON[key] = value;
  });

  // Kirim data ke API menggunakan metode fetch
  fetch('https://6523581ef43b179384155688.mockapi.io/api/v1/gudang', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataJSON)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Data berhasil dikirim ke API:', data);
      alert("Data berhasil ditambahkan.");
      window.location.href = "gudang.html"
  })
  .catch(error => {
      console.error('Terjadi kesalahan:', error);
  });
});