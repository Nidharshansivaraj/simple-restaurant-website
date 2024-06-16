document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const form = document.getElementById('contactForm');

    // Highlight current section link in the navigation
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 50) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Form submission handler
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        alert(`Thank you, ${name}! Your message has been received.`);
        
        // Here you can add AJAX request to send the form data to the server if needed.
        
        form.reset();
    });
});
