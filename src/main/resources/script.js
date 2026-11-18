// Mobile menu toggle functionality
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Booking alert triggers
const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const packageName = e.target.closest('.package-card').querySelector('h3').innerText;
        alert(`Thank you for choosing Wanderlust! You have selected the "${packageName}". We will contact you shortly to complete your booking.`);
    });
});

// Contact Form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}! Your message has been sent successfully. Our support team will reach out within 24 hours.`);
        contactForm.reset();
    });
}