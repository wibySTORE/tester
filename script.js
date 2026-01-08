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
    // Disable klik kanan
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('Klik kanan dinonaktifkan!');
    });

    // Disable shortcut keyboard
    document.addEventListener('keydown', function(e) {
        // Ctrl + U
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            alert('View Source dinonaktifkan!');
        }

        // Ctrl + Shift + I / J / C (DevTools)
        if (e.ctrlKey && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            alert('Developer Tools dinonaktifkan!');
        }

        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            alert('Developer Tools dinonaktifkan!');
        }
    });

