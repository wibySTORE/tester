// 1. Setting Nomor & Pesan
const CONFIG_NOMOR_ORDER   = ""; 
const CONFIG_NOMOR_BANTUAN = "";
const PESAN_BANTUAN         = "Halo Admin, saya butuh bantuan mengenai pembayaran di GSS TEAM.";

// 2. Fungsi Konfirmasi WhatsApp (Membawa Nominal Kode Unik)
function jalankanKonfirmasi(namaProduk, hargaTotal) {
    const msg = `*KONFIRMASI PEMBAYARAN GSS TEAM*\n` +
                `----------------------------------\n` +
                `Produk : ${namaProduk}\n` +
                `Total  : Rp ${hargaTotal.toLocaleString('id-ID')}\n` +
                `Status : TERVERIFIKASI AI\n` +
                `----------------------------------\n` +
                `*Bukti transfer asli sudah saya lampirkan.*`;
                
    const url = `https://wa.me/${CONFIG_NOMOR_ORDER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// 3. Tombol Bantuan
document.addEventListener("DOMContentLoaded", function() {
    const btnBantuan = document.getElementById('btnBantuan');
    if (btnBantuan) {
        btnBantuan.onclick = function() {
            const urlBantuan = `https://wa.me/${CONFIG_NOMOR_BANTUAN}?text=${encodeURIComponent(PESAN_BANTUAN)}`;
            window.open(urlBantuan, '_blank');
        };
    }
});