// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Fade-in on scroll using Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const faders = document.querySelectorAll('.project-card, .contact-form, .project-detail img, .profile-picture');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

// Handle contact form submission
document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Implement form submission logic here (e.g., using Fetch API or a form handling service)
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
});
