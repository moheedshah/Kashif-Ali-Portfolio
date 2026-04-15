
// Typed Animation for Hero Section
const typedText = document.querySelector('.typed-text');
const texts = ['Crafting Retro Visuals', 'Pixel Art & Logos', '5+ Years on Fiverr'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
function type() {
    const currentText = texts[textIndex];
    if (!isDeleting && charIndex < currentText.length) {
        typedText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(type, 100);
    } else if (isDeleting && charIndex > 0) {
        typedText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(type, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            textIndex = (textIndex + 1) % texts.length;
        }
        setTimeout(type, isDeleting ? 50 : 1500);
    }
}
type();

// Sidebar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.querySelector('.main-content');
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('sidebar-active');
});

// Close Sidebar on Outside Click
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && !e.target.closest('.sidebar') && !e.target.closest('.menu-toggle')) {
        sidebar.classList.remove('active');
        mainContent.classList.remove('sidebar-active');
    }
});

// Smooth Scrolling
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('active');
            mainContent.classList.remove('sidebar-active');
        }
    });
});

// Scroll Reveal for Sections
const sections = document.querySelectorAll('.section');
const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    });
};
window.addEventListener('scroll', revealSection);
revealSection();

// Back to Top Button
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});
document.querySelectorAll('a, .project-card, .arcade-panel, .testimonial-card, .back-to-top, .crt-tv').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('expand'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('expand'));
});

// Vanilla Tilt for Cards
VanillaTilt.init(document.querySelectorAll('.project-card, .testimonial-card, .crt-tv, .contact-card, .arcade-panel'), {
    max: 10,
    speed: 300,
    glare: true,
    'max-glare': 0.2
});
