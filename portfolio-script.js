s// ==================== Dark Mode Toggle ====================
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-mode', savedTheme === 'dark');
updateThemeToggle();

themeToggle.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    updateThemeToggle();
});

function updateThemeToggle() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            closeNavMenu();
        }
    });
});

// ==================== Navigation Menu ====================
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function closeNavMenu() {
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

// Close menu when link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closeNavMenu);
});

// ==================== Scroll Effects ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and stat cards
document.querySelectorAll('.project-card, .stat-card, .skill-item, .contact-card, .timeline-content').forEach(card => {
    observer.observe(card);
});

// ==================== Active Navigation Link ====================
window.addEventListener('scroll', () => {
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ==================== Smooth Progress Bar Animation ====================
const skillItems = document.querySelectorAll('.skill-item');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress');
            progressBars.forEach(bar => {
                const widthPercent = bar.style.width;
                bar.style.animation = `fillProgress 1.5s ease-out forwards`;
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

skillItems.forEach(item => {
    skillObserver.observe(item);
});

// ==================== Add Ripple Effect to Buttons ====================
const buttons = document.querySelectorAll('.btn, .contact-card, .project-card');

buttons.forEach(button => {
    button.addEventListener('mousedown', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// ==================== Page Load Animation ====================
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.animation = 'fadeIn 0.5s ease-out';
});

// ==================== Mobile Menu Toggle (if needed) ====================
// Create mobile menu toggle for small screens
function setupMobileMenu() {
    const navContainer = document.querySelector('.nav-container');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.menu-toggle')) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'menu-toggle';
            menuToggle.innerHTML = '☰';
            menuToggle.addEventListener('click', () => {
                const navMenu = document.querySelector('.nav-menu');
                navMenu.classList.toggle('active');
            });
            navContainer.insertBefore(menuToggle, navContainer.querySelector('.theme-toggle'));
        }
    }
}

window.addEventListener('resize', setupMobileMenu);
window.addEventListener('load', setupMobileMenu);

// ==================== Keyboard Navigation ====================
document.addEventListener('keydown', (e) => {
    // Close menu with Escape
    if (e.key === 'Escape') {
        closeNavMenu();
    }
});

// ==================== Contact Card Click Logging ====================
document.querySelectorAll('.contact-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Allow links to work normally
        if (this.href) {
            e.preventDefault();
            window.open(this.href, '_blank');
        }
    });
});

// ==================== Initialize ====================
console.log('Portfolio website loaded successfully!');
console.log('Dark mode preference:', localStorage.getItem('theme'));
