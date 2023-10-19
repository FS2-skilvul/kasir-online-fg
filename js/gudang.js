document.addEventListener('DOMContentLoaded', async function () {
    const button_dropdown_header = document.getElementById('button-dropdown-header')
    const dropdown_header = document.getElementById('dropdown-header')

    // Menambahkan event listener untuk tombol
    button_dropdown_header.addEventListener('click', function () {
        // Memeriksa apakah div memiliki kelas 'hidden'
        if (dropdown_header.classList.contains('hidden')) {
            // Jika ya, maka hapus kelas 'hidden' untuk membuka div
            dropdown_header.classList.remove('hidden');
        } else {
            // Jika tidak, tambahkan kelas 'hidden' untuk menutup div
            dropdown_header.classList.add('hidden');
        }
    })

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

    // URL API yang ingin Anda akses
    const apiUrl = 'https://6523581ef43b179384155688.mockapi.io/api/v1/gudang';
    // const nama = document.getElementById('nama');
    const tableBody = document.getElementById('tableBody');

    const gudang = []

    // Menggunakan fetch untuk mengambil data dari API
    await fetch(apiUrl)
        .then(response => {
            // Mengubah respons API ke dalam format JSON
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // nama.textContent = data[id_pengguna].nama;
            let index = 0
            data.forEach(item => {
                if (item.id_users === id_pengguna) {
                    const row = document.createElement('tr');
                    row.classList.add('border', 'border-gray-400', 'font-medium')
                    row.innerHTML = `<td class="py-3 text-center pl-3">${index + 1}</td>
                                <td class="py-3 text-center">${item.nama_barang}</td>
                                <td class="py-3 text-center">${item.kode_barang}</td>
                                <td class="py-3 text-center">${item.harga_beli}</td>
                                <td class="py-3 text-center">${item.harga_jual}</td>
                                <td class="py-3 text-center">${item.stok_barang}</td>
                                <td class="flex py-3 text-white items-center justify-center space-x-3">
                                    <a href="edit_gudang.html?id=${item.id}"
                                        class="flex justify-center items-center bg-green-500 px-3 py-0.5 rounded-lg hover:bg-green-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585l1.594-1.58zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006v-1.589z" />
                                            <path fill="currentColor"
                                                d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z" />
                                        </svg>
                                        <span class="font-semibold">Edit</span>
                                    </a>
                                    <button data-id="${item.id}" onclick="deleteItem(this)"
                                        class="flex justify-center items-center bg-red-500 px-3 py-0.5 rounded-lg hover:bg-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5Z" />
                                        </svg>
                                        <span class="font-semibold">Hapus</span>
                                    </button>
                                </td>
                                `
                    tableBody.appendChild(row);
                    index+=1
                }

            });
        })
        .catch(error => {
            // Penanganan kesalahan jika terjadi
            console.error('There was a problem with the fetch operation:', error);
        });

    // // Misalkan ada tombol "Hapus" dalam HTML dengan atribut data-id yang menyimpan ID data yang ingin dihapus.
    // const deleteButtons = document.querySelectorAll('[data-id]');

    // // Tambahkan event listener untuk setiap tombol "Hapus"
    // deleteButtons.forEach(button => {
    //     button.addEventListener('click', async event => {
    //         const dataId = event.target.getAttribute('data-id');
    //         console.log(dataId);
    //         try {
    //             const response = await fetch(`https://6523581ef43b179384155688.mockapi.io/api/v1/gudang/${dataId}`, {
    //                 method: 'DELETE',
    //             });

    //             if (response.ok) {
    //                 // Data telah berhasil dihapus dari API
    //                 // Anda dapat melakukan tindakan apa pun yang diperlukan setelah penghapusan berhasil.
    //                 // Misalnya, menghapus elemen HTML terkait dari tampilan.
    //                 event.target.parentElement.remove(); // Menghapus baris yang terkait dari tampilan
    //             } else {
    //                 console.error('Gagal menghapus data dari API');
    //             }
    //         } catch (error) {
    //             console.error('Terjadi kesalahan:', error);
    //         }
    //     });
    // });
})

async function deleteItem(button) {
    const id = button.getAttribute('data-id');
    console.log("luar" + id);

    const dataId = id;
    console.log("dalam" + dataId);
    try {
        const response = await fetch(`https://6523581ef43b179384155688.mockapi.io/api/v1/gudang/${dataId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            // Data telah berhasil dihapus dari API
            // Anda dapat melakukan tindakan apa pun yang diperlukan setelah penghapusan berhasil.
            // Misalnya, menghapus elemen HTML terkait dari tampilan.
            // Remove the item from the table
            const row = button.parentElement.parentElement;

            if (row) {
                const table = row.parentElement;
                table.removeChild(row);

                // Perbarui nomor pada baris-baris lain
                const rows = table.getElementsByTagName('tr');
                for (let i = 1; i <= rows.length; i++) {
                    rows[i - 1].cells[0].textContent = i; // Mengatur kembali nomor pada sel pertama (index 0)
                }
            } else {
                console.error('Baris tidak ditemukan');
            }
        } else {
            console.error('Gagal menghapus data dari API');
        }
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

document.getElementById('keluar').addEventListener('click', function () {
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('avatar');
    window.location.href = 'index.html'
})