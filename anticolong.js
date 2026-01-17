    // Disable klik kanan
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        alert('lu bukan developer gss team!');
    });

    // Disable shortcut keyboard
    document.addEventListener('keydown', function(e) {
        // Ctrl + U
        if (e.ctrlKey && e.key === 'u') {
            e.preventDefault();
            alert('lu bukan developer gss team!');
        }

        // Ctrl + Shift + I / J / C (DevTools)
        if (e.ctrlKey && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase())) {
            e.preventDefault();
            alert('lu bukan developer gss team!');
        }

        // F12
        if (e.key === 'F12') {
            e.preventDefault();
            alert('lu bukan developer gss team!');
        }
    });
