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
    const faders = document.querySelectorAll('.project-card, .contact-form, .project-detail img');

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

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});
