window.addEventListener('scroll', function() {
    let features = document.querySelector('.features h2');
    let mainFeatures = document.querySelectorAll('.main-features h3, .main-features p');
    let footer = document.querySelector('footer h2, footer p');

    // Trigger animation for features section
    if (window.scrollY > 100) {
        features.style.opacity = '1';
        features.style.transform = 'translateY(0)';
    }

    // Trigger animation for main features section
    if (window.scrollY > 400) {
        mainFeatures.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }

    // Trigger animation for footer
    if (window.scrollY > 800) {
        footer.style.opacity = '1';
        footer.style.transform = 'translateY(0)';
    }
});
