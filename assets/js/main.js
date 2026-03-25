"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize AOS Animations securely
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            duration: 800,
            easing: 'ease-in-out'
        });
    } else {
        console.warn("AOS library could not be loaded.");
    }

    // 2. Mobile Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'true');
            } else {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu on link click
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 3. Dynamic Navbar Background on Scroll
    const navbar = document.querySelector('.glass-nav');
    if (navbar) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(0, 34, 68, 0.98)'; // Darker corporate blue when scrolled
                navbar.style.boxShadow = '0 4px 10px -1px rgba(0, 0, 0, 0.5)';
            } else {
                navbar.style.background = 'rgba(0, 34, 68, 0.85)'; // Transparent corporate blue at top
                navbar.style.boxShadow = 'none';
            }
        };
        
        // Initial check and debounced listener
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
    }
});
