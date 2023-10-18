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
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });
});