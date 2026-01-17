
// 1. Setting Nomor
const CONFIG_NOMOR_ORDER   = "6285769732492"; 
const CONFIG_NOMOR_BANTUAN = "6285769732492";
const PESAN_BANTUAN        = "Halo Admin, saya butuh bantuan mengenai pembayaran di GSS TEAM.";

// 2. Fungsi Konfirmasi (Pastikan nama fungsi sama persis)
function jalankanKonfirmasi(namaProduk, hargaTotal) {
    const msg = `Halo Admin, saya sudah transfer.\n\nProduk: ${namaProduk}\nTotal: Rp ${hargaTotal.toLocaleString('id-ID')}\n\n*Bukti foto sudah saya lampirkan.*`;
    const url = `https://wa.me/${CONFIG_NOMOR_ORDER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// 3. Logika Tombol Bantuan Otomatis
document.addEventListener("DOMContentLoaded", function() {
    const btnBantuan = document.getElementById('btnBantuan');
    if (btnBantuan) {
        btnBantuan.onclick = function() {
            const urlBantuan = `https://wa.me/${CONFIG_NOMOR_BANTUAN}?text=${encodeURIComponent(PESAN_BANTUAN)}`;
            window.open(urlBantuan, '_blank');
        };
    }
});