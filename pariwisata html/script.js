// script.js

// Menu toggle functionality for small screens
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar');

    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Optional: Close the menu when a link is clicked
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
});

// Ambil elemen-elemen yang dibutuhkan
const form = document.getElementById('contact-form');
const sendButton = document.getElementById('send-btn');
const responseMessage = document.getElementById('response-message');

// Event listener untuk form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk refresh halaman

    // Ambil nilai input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validasi input
    if (name === '' || email === '' || message === '') {
        responseMessage.style.color = 'red';
        responseMessage.textContent = 'Please fill in all fields.';
    } else {
        // Menampilkan pesan sukses
        responseMessage.style.color = 'green';
        responseMessage.textContent = 'Your message has been sent successfully!';

        // Reset form setelah pengiriman
        form.reset();
    }
});
