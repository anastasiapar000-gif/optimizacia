document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    const navItems = document.querySelectorAll('.nav-links a');
    
    if (!burger || !navLinks || !overlay) {
        console.log('Бургер-меню не найдено на странице');
        return;
    }
    
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
        
        if (navLinks.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
            burger.setAttribute('aria-expanded', 'true');
        } else {
            document.body.style.overflow = '';
            burger.setAttribute('aria-expanded', 'false');
        }
    });
    
    overlay.addEventListener('click', function() {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
        burger.setAttribute('aria-expanded', 'false');
    });
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            burger.setAttribute('aria-expanded', 'false');
        });
    });
});