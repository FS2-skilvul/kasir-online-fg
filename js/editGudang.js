function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  
  function confirmAction(confirmation) {
    closeModal();
    if (confirmation) {
      // Tindakan yang diambil jika pengguna memilih "Iya"
      window.location.href='/gudang.html'
    } else {
      // Tindakan yang diambil jika pengguna memilih "Tidak"
      closeModal();
    }
  }
  
  // Menutup modal jika pengguna mengklik di luar modal
  window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }