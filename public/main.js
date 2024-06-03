document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen form registrasi dari DOM
    const registerForm = document.getElementById('registerForm');
    // Ambil elemen form login dari DOM
    const loginForm = document.getElementById('loginForm');
    // Ambil elemen tombol logout dari DOM
    const logoutButton = document.getElementById('logoutButton');

    // Event listener untuk form registrasi
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Menghentikan pengiriman form secara default

            // Ambil nilai username dan password dari input
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Kirim data registrasi ke server menggunakan fetch API
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Tipe konten JSON
                },
                body: JSON.stringify({ username, password }), // Kirim data dalam format JSON
            });

            // Ambil hasil respons dari server dalam bentuk JSON
            const result = await response.json();

            // Tampilkan pesan hasil registrasi
            alert(result.message);

            // Jika registrasi sukses, arahkan ke halaman login
            if (result.success) {
                window.location.href = 'login.html';
            }
        });
    }

    // Event listener untuk form login
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Menghentikan pengiriman form secara default

            // Ambil nilai username dan password dari input
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Kirim data login ke server menggunakan fetch API
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Tipe konten JSON
                },
                body: JSON.stringify({ username, password }), // Kirim data dalam format JSON
            });

            // Ambil hasil respons dari server dalam bentuk JSON
            const result = await response.json();

            // Tampilkan pesan hasil login
            alert(result.message);

            // Jika login sukses, arahkan ke halaman utama
            if (result.success) {
                window.location.href = 'index.html';
            }
        });
    }

    // Event listener untuk tombol logout
    if (logoutButton) {
        logoutButton.addEventListener('click', () => {
            // Logika untuk logout (belum diimplementasikan dalam contoh ini)
            window.location.href = 'login.html'; // Redirect ke halaman login
        });
    }
});
