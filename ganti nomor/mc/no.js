    const productSelect = document.getElementById('productSelect');
    const priceDisplay = document.getElementById('priceDisplay');
    const confirmBtn = document.getElementById('confirmBtn');

    // Fungsi untuk format angka ke rupiah
    function formatRupiah(angka) {
        return 'Rp ' + Number(angka * 1000).toLocaleString('id-ID'); 
        // dikalikan 1000 karena contoh $50 jadi Rp50.000
    }

    // Update harga saat pilihan berubah
    productSelect.addEventListener('change', () => {
        const selectedOption = productSelect.selectedOptions[0];
        const price = selectedOption.getAttribute('data-price');
        priceDisplay.innerText = price && price !== "0" ? `Harga: ${formatRupiah(price)}` : "Harga: -";
    });

    // Klik tombol beli -> buka WhatsApp
    confirmBtn.addEventListener('click', () => {
        const product = productSelect.value;
        const price = productSelect.selectedOptions[0].getAttribute('data-price');

        if(!product || price === "0"){
            alert('Pilih produk terlebih dahulu!');
            return;
        }

        const phone = '6289524016619'; // ganti nomor WA tujuan
        const message = `Halo, saya ingin membeli ${product} seharga ${formatRupiah(price)}`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    });