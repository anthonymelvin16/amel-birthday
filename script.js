function showMessage() {
    // Menampilkan modal, bukan popup alert kaku lagi
    document.getElementById('messageModal').style.display = 'flex';
}

function closeMessage() {
    // Menutup modal
    document.getElementById('messageModal').style.display = 'none';
}

// Tambahan: Biar pas klik di luar kotak, modalnya ketutup
window.onclick = function(event) {
    const modal = document.getElementById('messageModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}