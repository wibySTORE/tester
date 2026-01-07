document.addEventListener("DOMContentLoaded", function() {
    const nomorWA = "6289524016619";
    const tombolWA = document.querySelectorAll('.vip');

    tombolWA.forEach((tombol, index) => {
        const paket = index + 1;
        const pesan = `Halo kak, saya mau order config paket ${paket}`;

        // Ambil harga dari parent .card
        const card = tombol.closest('.card'); // cari parent dengan class .card
        const harga = card.querySelector('.harga').innerText;

        const pesanDenganHarga = `${pesan}  ${harga}`;
        const pesanEncoded = encodeURIComponent(pesanDenganHarga);

        tombol.href = `https://wa.me/${nomorWA}?text=${pesanEncoded}`;
    });
});
