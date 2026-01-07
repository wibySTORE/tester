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