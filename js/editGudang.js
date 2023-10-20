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

document.getElementById("editForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Ambil data dari form
  const kode_barang = document.getElementById("kode_barang").value
  const nama_barang = document.getElementById("nama_barang").value
  const harga_beli = document.getElementById("harga_beli").value
  const harga_jual = document.getElementById("harga_jual").value
  const stok_barang = document.getElementById("stok_barang").value

  // Untuk mendapatkan parameter id
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  // Ganti URL_API dengan URL API yang sesuai
  const apiURL = `https://6523581ef43b179384155688.mockapi.io/api/v1/gudang/${id}`;

  // Data yang akan dikirim ke API
  const data = {
    kode_barang: kode_barang,
    nama_barang: nama_barang,
    harga_beli: harga_beli,
    harga_jual: harga_jual,
    stok_barang: stok_barang,
  };

  // Konfigurasi permintaan fetch
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  // Kirim permintaan fetch
  fetch(apiURL, requestOptions)
    .then(response => {
      if (response.ok) {
        // Data berhasil diubah
        alert("Data berhasil diubah.");
        window.location.href = "gudang.html"
      } else {
        // Kesalahan dalam mengubah data
        alert("Terjadi kesalahan dalam mengubah data.");
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
});

document.addEventListener('DOMContentLoaded', function () {
  // Profil
  const id_pengguna = parseInt(sessionStorage.getItem('id'), 10);
  const name = sessionStorage.getItem('name');
  const avatar = sessionStorage.getItem('avatar');

  document.getElementById('nama').textContent = name
  // Cek apakah sessionStorage avatar null
  if (avatar === "") {
    // Jika avatar null, ganti dengan gambar lokal
    document.getElementById('foto_profil').src = 'src/blank-profil.png';
  } else {
    // Jika avatar tidak null, gunakan avatar dari sessionStorage
    document.getElementById('foto_profil').src = avatar;
  }

  // Untuk mendapatkan parameter id
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');

  // Ganti URL_API dengan URL API yang sesuai
  const apiURL = `https://6523581ef43b179384155688.mockapi.io/api/v1/gudang/${id}`;
  console.log(apiURL);
  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      // Mengisi form dengan data yang diambil dari API
      document.getElementById("kode_barang").value = data.kode_barang;
      document.getElementById("nama_barang").value = data.nama_barang;
      document.getElementById("harga_beli").value = data.harga_beli;
      document.getElementById("harga_jual").value = data.harga_jual;
      document.getElementById("stok_barang").value = data.stok_barang;
    })
    .catch(error => {
      console.error('Error:', error);
    });
})