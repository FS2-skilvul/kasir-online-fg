document.addEventListener('DOMContentLoaded', function(){
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
})