
    // --- 1. LOGIKA DATA PESANAN & QRIS ---
    const nama = localStorage.getItem('pesanan_produk');
    const hargaRaw = localStorage.getItem('pesanan_harga');
    const imgElement = document.getElementById('qrisImage');
    const errorMsg = document.getElementById('errorMessage');

    if (nama && hargaRaw) {
        // Tampilkan Nama & Harga (dikali 1000)
        if(document.getElementById('namaProduk')) {
            document.getElementById('namaProduk').innerText = nama;
        }
        if(document.getElementById('hargaProduk')) {
            document.getElementById('hargaProduk').innerText = 'Rp ' + Number(hargaRaw * 1000).toLocaleString('id-ID');
        }

        // Auto-detect Gambar QRIS di folder /qris/
        const folder = "qris";
        const fileName = `qris-${hargaRaw}`;
        
        if (imgElement) {
            imgElement.src = `${folder}/${fileName}.jpg`;

            // Jika .jpg gagal, coba .png, lalu .jpeg
            imgElement.onerror = function() {
                if (this.src.endsWith('.jpg')) {
                    this.src = `${folder}/${fileName}.png`;
                } else if (this.src.endsWith('.png')) {
                    this.src = `${folder}/${fileName}.jpeg`;
                } else {
                    this.style.display = 'none';
                    if(errorMsg) {
                        errorMsg.style.display = 'block';
                        errorMsg.innerText = `File ${fileName} tidak ditemukan di folder /qris/`;
                    }
                }
            };
        }

        // Tombol Konfirmasi WhatsApp
        const btnKonf = document.getElementById('btnKonfirmasi');
        if (btnKonf) {
            btnKonf.onclick = function() {
                const phone = '6285769732492';
                const msg = `Halo Admin, saya sudah transfer untuk: ${nama} (${hargaRaw}K)`;
                window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
            }
        }
    }

    // --- 2. LOGIKA MODAL (YANG NORMAL) ---
    const modal = document.getElementById("pageModal");
    const openBtn = document.getElementById("openModalBtn");
    const closeModal = document.getElementById("closeModal");

    if (openBtn && modal) {
        openBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Biar tidak loncat ke atas
            modal.style.display = "flex";
        });
    }

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            modal.style.display = "none";
        });
    }

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // --- 3. LOGIKA PARTIKEL ---
    const canvas = document.getElementById("particles");
    if (canvas) {
        const ctx = canvas.getContext("2d");
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener("resize", resize);
        resize();

        const particles = [];
        for (let i = 0; i < 70; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                dx: (Math.random() - 0.5) * 0.4,
                dy: (Math.random() - 0.5) * 0.4,
                color: Math.random() > 0.5 ? "rgba(0,217,255,0.7)" : "rgba(255,255,255,0.4)"
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }
        draw();
    }
