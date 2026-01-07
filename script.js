  // ===== TOAST NOTIFICATION =====
    const toast = document.getElementById("toast");

    function showToast() {
        toast.classList.add("show");
        setTimeout(() => {
            toast.classList.remove("show");
        }, 5000);
    }

    // tampil pertama kali
    showToast();

    // tampil setiap 10 detik
    setInterval(showToast, 10000);

    // ===== AUTO REFRESH SAAT KEMBALI KE TAB =====
    document.addEventListener("visibilitychange", function () {
        if (!document.hidden) {
            location.reload();
        }
    });

    window.addEventListener("focus", function () {
    location.reload();
});

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        location.reload();
    }
});

// Event detect user kembali ke tab
document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible") {
        refreshPageWithPopup();
    }
});

(function () {
    // Cek apakah sudah pernah refresh di sesi ini
    if (sessionStorage.getItem('alreadyRefreshed')) return;

    // Fungsi refresh 1x
    function refreshOnce() {
        sessionStorage.setItem('alreadyRefreshed', 'true');
        location.reload();
    }

    // Tangkap SEMUA klik di halaman
    document.addEventListener('click', refreshOnce, { once: true });

    // Opsional: tangkap sentuhan di HP
    document.addEventListener('touchstart', refreshOnce, { once: true });
})();
