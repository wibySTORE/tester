// 1. Setting Username Telegram (Tanpa tanda @)
const CONFIG_TELE_ORDER   = "gssteamvip"; 
const CONFIG_TELE_BANTUAN = "gssteamvip";
const PESAN_BANTUAN        = "Halo Admin, saya butuh bantuan mengenai pembayaran di GSS TEAM.";

// 2. Fungsi Konfirmasi
function jalankanKonfirmasi(namaProduk, hargaTotal) {
    // Catatan: Telegram tidak mendukung auto-fill pesan via URL (pre-filled text) 
    // sebaik WhatsApp, namun kita bisa arahkan ke bot atau user.
    const msg = `Halo Admin, saya sudah transfer.\n\nProduk: ${namaProduk}\nTotal: Rp ${hargaTotal.toLocaleString('id-ID')}`;
    
    // Mengarahkan ke Telegram
    const url = `https://t.me/${CONFIG_TELE_ORDER}`;
    window.open(url, '_blank');
}

// 3. Logika Tombol Bantuan Otomatis
document.addEventListener("DOMContentLoaded", function() {
    const btnBantuan = document.getElementById('btnBantuan');
    if (btnBantuan) {
        btnBantuan.onclick = function() {
            const urlBantuan = `https://t.me/${CONFIG_TELE_BANTUAN}`;
            window.open(urlBantuan, '_blank');
        };
    }
});
