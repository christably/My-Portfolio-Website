// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Scroll to section animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Form validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // In a real scenario, you would send this data to a server
        alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}

// Add animation to timeline items
const timelineItems = document.querySelectorAll('.timeline-item');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    observer.observe(item);
});

// Add animation to skill categories
const skillCategories = document.querySelectorAll('.skill-category');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay for staggered animation
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 100);
        }
    });
}, { threshold: 0.2 });

skillCategories.forEach(category => {
    skillObserver.observe(category);
});

// Add animation to project cards
const projectCards = document.querySelectorAll('.project-card');
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay for staggered animation
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, index * 150);
        }
    });
}, { threshold: 0.2 });

projectCards.forEach(card => {
    projectObserver.observe(card);
});

// Update copyright year automatically
document.addEventListener('DOMContentLoaded', () => {
    const year = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${year} Christabel Aidoo. All Rights Reserved.`;
});

// Add typing animation to hero section heading
document.addEventListener('DOMContentLoaded', () => {
    const titles = ['Full-Stack Developer', 'Web Developer', 'Problem Solver'];
    const heroTitle = document.querySelector('.hero-content h2');
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            // Deleting text
            heroTitle.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // Typing text
            heroTitle.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
        }
        
        // If word is complete, start deleting
        if (!isDeleting && charIndex === currentTitle.length) {
            // Pause at the end of the word
            setTimeout(() => {
                isDeleting = true;
            }, 1500);
        } 
        // If deletion is complete, move to next word
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
        }
        
        // Typing speed
        let typeSpeed = isDeleting ? 50 : 100;
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start the typing effect after a short delay
    setTimeout(typeEffect, 1000);
});

// Add scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add this CSS for the scroll to top button
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }
    
    .scroll-top-btn.show {
        opacity: 1;
        visibility: visible;
    }
    
    .scroll-top-btn:hover {
        background-color: var(--secondary-color);
        transform: translateY(-3px);
    }
    
    .animate {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .timeline-item {
        opacity: 0;
    }
    
    .skill-category, .project-card {
        opacity: 0;
    }
`;

document.head.appendChild(style);
