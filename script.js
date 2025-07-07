document.addEventListener('DOMContentLoaded', function() {

    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('nav--visible');
            navToggle.classList.toggle('is-active');
        });
    }

    // Smooth Scrolling for nav links
    const navLinks = document.querySelectorAll('.nav-link, .logo, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href) return;

            const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname.endsWith('.html') === false;
            const isAnchorLink = href.startsWith('#');
            const targetUrl = new URL(href, window.location.href);

            // If it's a link to a different page, let the browser handle it.
            if (targetUrl.pathname !== window.location.pathname) {
                return;
            }

            // If it's an anchor link on the current page.
            if (isAnchorLink) {
                e.preventDefault();
                const targetSection = document.querySelector(href);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    // Close mobile nav after clicking a link
                    if (nav && nav.classList.contains('nav--visible')) {
                        nav.classList.remove('nav--visible');
                        navToggle.classList.remove('is-active');
                    }
                }
            }
        });
    });
    
    // Header class on scroll
    const header = document.querySelector('.header');
    if(header) {
         const initialHeaderState = () => {
             // Legal pages should have scrolled header by default
            if (!window.location.pathname.endsWith('index.html') && window.location.pathname !== '/') {
                 header.classList.add('header--scrolled');
            } else {
                 if (window.scrollY > 50) {
                    header.classList.add('header--scrolled');
                } else {
                    header.classList.remove('header--scrolled');
                }
            }
        };
        
        initialHeaderState(); // Check on load
        window.addEventListener('scroll', initialHeaderState); // Check on scroll
    }

    // Atom animation mouse interaction
    const scene = document.querySelector('.scene');
    if (scene) {
        document.addEventListener('mousemove', (e) => {
            const screenW = window.innerWidth;
            const screenH = window.innerHeight;
            const x = e.clientX;
            const y = e.clientY;

            // Calculate rotation values based on mouse position
            // Max rotation of ~15 degrees
            const rotateY = ((x - screenW / 2) / (screenW / 2)) * -15; 
            const rotateX = ((y - screenH / 2) / (screenH / 2)) * 15;

            scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            scene.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }
});