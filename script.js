document.addEventListener('keydown', function (event) {
    // Prevent F12 key (123) and Alt key (18)
    if (event.key === "F12" || event.key === "Alt" || 
        // Prevent Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, ctrl+shift+c
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "c" || event.key === "C")) || 
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
        return false;
    }
});

// Prevent right-click context menu
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    return false;
});

// form validation
const form = document.querySelector('#form');
const nama = document.querySelector('#nama');
const kelas = document.querySelector('#kelas');
const pesan = document.querySelector('#pesan');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const errors = []

    if (nama.value.length < 3) {
        errors.push('Nama minimal 3 karakter');
    }
    if (kelas.value === '') {
        errors.push('Kelas harus dipilih');
    }
    if (pesan.value.length < 3) {
        errors.push('Pesan minimal 3 karakter');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
    } else {
        return alert(`Terima kasih ${nama.value}! Pesan Anda telah berhasil dikirim.`);
    }
});

