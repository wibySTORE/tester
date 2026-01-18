// 1. Setting Username Telegram
const CONFIG_TELE_ADMIN = "gssteamvip"; 

// 2. Fungsi Konfirmasi
function jalankanKonfirmasi(namaProduk, hargaTotal) {
    // Membuka chat Telegram ke gssteamvip
    const url = `https://t.me/${CONFIG_TELE_ADMIN}`;
    window.open(url, '_blank');
}

// 3. Logika Tombol Bantuan Otomatis
document.addEventListener("DOMContentLoaded", function() {
    const btnBantuan = document.getElementById('btnBantuan');
    if (btnBantuan) {
        btnBantuan.onclick = function() {
            // Membuka chat Telegram ke gssteamvip
            const urlBantuan = `https://t.me/${CONFIG_TELE_ADMIN}`;
            window.open(urlBantuan, '_blank');
        };
    }
});
