// script.js - Interactive functionality for the futuristic navigation experience

document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('nav');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Mobile Menu Toggle
    mobileMenuButton.addEventListener('click', () => {
        mobileMenuButton.classList.toggle('active');
        
        if (mobileMenu.classList.contains('open')) {
        mobileMenu.style.height = '0';
        mobileMenu.classList.remove('open');
        } else {
        mobileMenu.classList.add('open');
        mobileMenu.style.height = `${mobileMenu.scrollHeight}px`;
        }
    });

});
