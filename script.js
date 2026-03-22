// ==========================================
// Particles.js Configuration
// ==========================================
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 900 } },
            color: { value: ["#38bdf8", "#8b5cf6", "#06b6d4", "#ec4899"] },
            shape: { 
                type: ["circle", "triangle", "polygon"],
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 6 }
            },
            opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } },
            size: { value: 5, random: true, anim: { enable: true, speed: 2, size_min: 0.1, sync: false } },
            line_linked: { enable: true, distance: 120, color: "#38bdf8", opacity: 0.3, width: 1 },
            move: { 
                enable: true, 
                speed: 2, 
                direction: "none", 
                random: true, 
                straight: false, 
                out_mode: "bounce", 
                bounce: true, 
                attract: { enable: false, rotateX: 600, rotateY: 1200 } 
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                repulse: { distance: 150, duration: 0.4 },
                push: { particles_nb: 6 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });
}

// ==========================================
// AOS Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // Hide Preloader
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hide');
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 2000); // Show preloader for 2 seconds
    }

    // ==========================================
    // Scroll Progress Indicator
    // ==========================================
    const scrollProgress = document.getElementById('scroll-progress-bar');
    if (scrollProgress) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            scrollProgress.style.width = scrollPercent + '%';
        });
    }

    // ==========================================
    // Back to Top Button
    // ==========================================
    const scrollTopBtn = document.querySelector('.scroll-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // Theme Toggle Logic
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check saved theme in local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }

    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        let theme = 'dark';
        
        if (document.body.classList.contains('light-theme')) {
            theme = 'light';
            document.body.classList.remove('dark-theme');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.body.classList.add('dark-theme');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
        
        localStorage.setItem('theme', theme);
    });

    // ==========================================
    // Typing Effect Logic
    // ==========================================
    const texts = ["Cloud Computing Enthusiast", "Software Developer", "Problem Solver", "Tech Enthusiast"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;
    
    const typingElement = document.querySelector(".typing-text");
    
    (function type() {
        if (!typingElement) return;

        if (count === texts.length) count = 0;
        currentText = texts[count];
        
        if (isDeleting) {
            letter = currentText.slice(0, --index);
        } else {
            letter = currentText.slice(0, ++index);
        }
        
        typingElement.textContent = letter + "|";
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && letter.length === currentText.length) {
            typeSpeed = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            typeSpeed = 500; // Pause before new word
        }
        
        setTimeout(type, typeSpeed);
    }());

    // ==========================================
    // Scroll Reveal Animation (Intersection Observer) - Keeping for compatibility
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once for better performance
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% visible
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ==========================================
    // Navbar Scroll & ScrollSpy Logic
    // ==========================================
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Active Navbar Links on Scroll
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                navItems.forEach(item => {
                    item.classList.remove("active");
                    if (item.getAttribute("href") === `#${currentId}`) {
                        item.classList.add("active");
                    }
                });
            }
        });
    }, {
        root: null,
        rootMargin: "-20% 0px -70% 0px", 
        threshold: 0
    });

    sections.forEach(section => sectionObserver.observe(section));

    // ==========================================
    // Mobile Menu Toggle Logic
    // ==========================================
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            
            // Toggle hamburger icon (bars to times)
            const icon = hamburger.querySelector("i");
            if (navLinks.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
        
        // Close menu when clicking a link
        document.querySelectorAll(".nav-item").forEach(item => {
            item.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = hamburger.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }

    // ==========================================
    // Smooth Scroll for Internal Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                window.scrollTo({
                    top: target.offsetTop - 70, // Offset for sticky navbar
                    behavior: 'smooth'
                });
            }
        });
    });
});
